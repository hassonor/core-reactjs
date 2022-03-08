import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import App from './components/App';
import configureStore from "../redux/configuerStore";
import {Provider as ReduxProvider} from "react-redux"
import './index.css';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
