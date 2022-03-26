import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

import {
    CounterDecrementAction,
    CounterIncreaseByAmountAction,
    CounterIncrementAction,
    CounterToggle
} from "../redux/CounterState";
import {RootState} from "../redux/Store";


const Counter = (): JSX.Element => {
    const dispatch = useDispatch();

    // TS infers type: (state: RootState) => number
    const selectCounter = (state: RootState) => state.counterState.counter
    const selectShowToggle = (state: RootState) => state.counterState.showCounter

    // TS infers `counter` is number
    const counter = useSelector(selectCounter)
    const showToggle = useSelector(selectShowToggle);

    const incrementHandler = () => {
        dispatch(CounterIncrementAction())
    };

    const decrementHandler = () => {
        dispatch(CounterDecrementAction())
    };

    const increaseHandler = () => {
        dispatch(CounterIncreaseByAmountAction(5));
    }

    const toggleCounterHandler = () => {
        dispatch(CounterToggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showToggle && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase By Amount</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
