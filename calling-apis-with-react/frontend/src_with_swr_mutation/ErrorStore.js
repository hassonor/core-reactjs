import { createStore } from "redux";
import ErrorReducer from "./ErrorReducer";

const ErrorStore = createStore(ErrorReducer);

export default ErrorStore;