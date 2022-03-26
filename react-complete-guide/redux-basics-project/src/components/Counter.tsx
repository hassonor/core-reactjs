import classes from './Counter.module.css';

import {
    CounterDecrementAction,
    CounterIncreaseByAmountAction,
    CounterIncrementAction,
    CounterToggle
} from "../redux/CounterState";
import {useAppDispatch, useAppSelector} from "../redux/hooks";

const Counter = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const counter = useAppSelector((state) => state.counterState.counter)
    const showToggle = useAppSelector((state) => state.counterState.showCounter);

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
