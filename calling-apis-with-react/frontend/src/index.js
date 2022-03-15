import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import CartStore from "./CartStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={CartStore}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

