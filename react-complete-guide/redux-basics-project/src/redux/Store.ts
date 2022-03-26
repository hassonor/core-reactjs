import {createStore} from 'redux';
import {counterReducer} from "./CounterState";

export interface RootState {
    counter: number
}

const store = createStore(counterReducer);

export default store;