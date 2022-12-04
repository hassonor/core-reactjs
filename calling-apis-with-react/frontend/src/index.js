
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import CartStore from "./CartStore";
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <Provider store={CartStore}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

