import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./CounterState";
import {authReducer} from "./AuthState";


const reducers = combineReducers({authState: authReducer, counterState: counterReducer})


const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;