import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../redux/Store";
import {CounterDecrementAction, CounterIncrementAction} from "../redux/CounterState";

const Counter = (): JSX.Element => {
    const dispatch = useDispatch();

    // TS infers type: (state: RootState) => number
    const selectCounter = (state: RootState) => state.counter

    // TS infers `counter` is number
    const counter = useSelector(selectCounter)

    const incrementHandler = () => {
        dispatch(CounterIncrementAction())
    };

    const decrementHandler = () => {
        dispatch(CounterDecrementAction())
    };

    const toggleCounterHandler = () => {
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
