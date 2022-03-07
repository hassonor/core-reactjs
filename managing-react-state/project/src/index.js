import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from './components/ErrorBoundary';
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./contexts/cartContext";

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <CartProvider>
                <App/>
            </CartProvider>
        </BrowserRouter>
    </ErrorBoundary>
    , document.getElementById("root"));
