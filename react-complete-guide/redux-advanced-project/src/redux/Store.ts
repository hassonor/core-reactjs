import {combineReducers, createStore} from 'redux';
import {uiReducer} from "./UIState";


const reducers = combineReducers({uiState: uiReducer})


const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;