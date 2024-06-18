import { useState } from "react";

function List(props) {

    const [count, setCount] = useState(1)

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="main">
                <span>{props.price}</span>
                <button disabled={count == 1 ? true : false} onClick={dec}> - </button>
                <span>{count}</span>
                <button onClick={inc}> + </button>
                <span style={{color:count>=5 ? 'red' : ""}}>{props.price * count}</span>
            </div>
        </>
    )
}
export default List;