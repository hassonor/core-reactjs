import React from "react";
import {Routes, Route} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "react-query";
import "./App.css";
import Header from "./Header";
import Eventlist from "./Eventlist";
import ShoppingCart from "./ShoppingCart";
import Confirmation from "./Confirmation";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Eventlist/>}/>

                    <Route path="/cart" element={<ShoppingCart/>}/>
                    <Route path="/confirm" element={<Confirmation/>}/>
                </Routes>
            </QueryClientProvider>
        </>
    )
        ;
}

export default App;
