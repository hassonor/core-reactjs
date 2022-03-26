import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./CounterState";
import {authReducer} from "./AuthState";


const reducers = combineReducers({authState: authReducer, counterState: counterReducer})
export type RootState = ReturnType<typeof reducers>;

const store = createStore(reducers);

export default store;