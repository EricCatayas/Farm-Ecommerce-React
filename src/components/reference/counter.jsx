import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "../../redux/counter";

export const UsingReducer = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment);
    }
     const onIncrementByAmount = () => {
       dispatch(incrementByAmount(1000));
     };
    return(
        <section>
            <h1>The count is: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
        </section>
    )
}