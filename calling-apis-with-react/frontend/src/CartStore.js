import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import CartReducer from "./CartReducer";

const thunkMiddle = applyMiddleware(thunkMiddleware);

const CartStore = createStore(CartReducer, thunkMiddle);

export default CartStore;