import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";



const Current = () => {
    const [currPrice, setCurr] = useState<number>();
    const [updatedDate, setUpdate] = useState<string>();
    const [loadStatus, setLoadSta] = useState<boolean>(true);
    const [loadErr, setLoadErr] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            const resp = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/thb.json');
            setCurr(resp.data.bpi.THB.rate_float)
            // console.log("currPrice: " + currPrice);
            setUpdate(resp.data.time.updated)
            // console.log("currUpdate: " + updatedDate);
        }
        catch (err) {
            setLoadErr(true);
        }
        setLoadSta(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const render = () => {
        if (loadStatus) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )
        }
        else if (loadErr) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl text-red-900'>Loading Fail</p>
                </div>
            )
        }
        else {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{currPrice?.toLocaleString()} THB</p>
                    <p> (Last updated {updatedDate}) </p>
                </div>

            )
        }

    }

    return (
        // /* template for /current */
        <div>
            {render()}
        </div>
    )

}

{/* <p className='text-2xl'>Loading ...</p>
            <p className='text-2xl'>{(999999999).toLocaleString()} THB</p>
            <p> (Last updated) </p> */}

export default Current;