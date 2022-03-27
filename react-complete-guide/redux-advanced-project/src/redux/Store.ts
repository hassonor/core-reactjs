import {combineReducers, createStore} from 'redux';
import {uiReducer} from "./UiState";
import {cartReducer} from "./CartState";


const reducers = combineReducers({uiState: uiReducer, cartState: cartReducer})


const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;