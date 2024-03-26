import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "../../redux/counter";
import { useState } from "react";

function generateCount() {
    return 0;
}

export const UsingStateContext = () => {

    const [setCount, count] = useState(generateCount); // runs once

    const onIncrement = () => {
        setCount(curr => curr + 1)
    }
    const onIncrementByAmount = (amount) => {
        setCount(curr => curr + amount)
    };
    return(
        <section>
            <h1>The count is: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={() => onIncrementByAmount(100)}>Increment By 100</button>
        </section>
    )
}

export const UsingReducer = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment);
    }
    const onIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(amount));
    };
    return(
        <section>
            <h1>The count is: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
        </section>
    )
}