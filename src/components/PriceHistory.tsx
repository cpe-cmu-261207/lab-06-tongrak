
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";


type Params = {
    range: string
}

const PriceHistory = () => {
    const [startDate, setStart] = useState<string>("null");
    const [endDate, setEnd] = useState<string>("null");
    // const { range } = useParams<Params>();
    const history = useHistory();
    const historyHook = useCallback((inStr) => history.push(inStr), [])

    const getDataCheck = () => {
        if (startDate == undefined || endDate == undefined || startDate > endDate) {
            alert("Please select start date and end date correctly")
        } else {
            historyHook('/history/result?start=' + startDate + '&end=' + endDate);
            console.log("You have click the button");

        }
    }

    const getStartCB = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setStart(ev.target.value);
        console.log("Start: " + startDate);
    }

    const getEndCB = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setEnd(ev.target.value);
        console.log("End: " + endDate);
    }

    return (
        < div className='text-center space-y-3 space-x-3' >
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={getStartCB}></input>
            <span>To date</span>
            <input type='date' onChange={getEndCB}></input>
            <br />
            <br />
            {/* /history/result?start=$ */}
            <button onClick={getDataCheck}>
                Get data
            </button>
        </div >
    )
}

// /* template for /history/select */ 
// < div className = 'text-center space-y-3 space-x-3' >
// <p className='text-2xl font-semibold'>Select historical range</p>
// <span>From date</span>
// <input type='date' onChange={e => console.log(e.target.value)}></input>
// <span>To date</span>
// <input type='date' onChange={e => console.log(e.target.value)}></input>
// <br />
// <br />
// <Link to='/history/result' >
//   <button>
//     Get data
//   </button>
// </Link>
// </div >

export default PriceHistory;