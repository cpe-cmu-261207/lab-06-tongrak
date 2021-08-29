
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


const HistoryResult = () => {
    let query = new URLSearchParams(useLocation().search);
    const [dataSet, setData] = useState<Record<string, number>>();
    const [loadStatus, setLoadSta] = useState<boolean>(true);
    const [loadErr, setLoadErr] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${query.get("start")}&end=${query.get("end")}`);
            setData(resp.data.bpi);
            console.log(dataSet);
        }
        catch (err) {
            setLoadErr(true);
        }
        setLoadSta(false);
    }

    useEffect(() => {
        // axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${query.get("start")}&end=${query.get("end")}`)
        //     .then(resp => {
        //         setData(resp.data.bpi);
        //         console.log(dataSet)
        //     })
        //     .catch(err => {
        //         setLoadErr(true);
        //     })
        // setLoadSta(true);
        fetchData();
    }, [])

    const liMaker = (a: string, b: number) => {
        return (
            <li className='text-xl' key='{(new Date()).getTime()}'>{a} - {b.toLocaleString()} THB</li>
        )
    }

    const render = () => {
        if (loadStatus)
            return <p className='text-2xl'>Loading ...</p>
        else if (loadErr)
            return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        else {
            if (dataSet != null) {
                return (
                    <div>
                        <p className='text-xl font-semibold'> ( From {query.get("start")} To {query.get("end")} )</p>
                        <br />
                        <ul>
                            {Object.entries(dataSet).map(x => liMaker(x[0], x[1]))}
                        </ul>
                    </div>
                )
            }
        }
    }

    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            {render()}
        </div>
    )
}

export default HistoryResult