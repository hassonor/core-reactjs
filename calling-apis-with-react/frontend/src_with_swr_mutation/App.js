import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Header";
import Eventlist from "./Eventlist";
import ShoppingCart from "./ShoppingCart";
import Confirmation from "./Confirmation";
import ErrorBanner from "./ErrorBanner";
import ErrorBoundary from "./ErrorBoundary";


function App() {
    return (
        <>
            <Header/>
            <ErrorBanner/>
            <Routes>
                <ErrorBoundary fallback={<div className="mt-5 ms-5">Error!</div>}>
                    <Route path="/" element={<Eventlist/>}/>
                </ErrorBoundary>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/confirm" element={<Confirmation/>}/>
            </Routes>
        </>
    );
}

export default App;
