import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import {Routes, Route} from "react-router-dom"
import Detail from "./components/Details";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


export default function App() {
    return (
        <>
            <div className="content">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<h1>Welcome to Rock Fitness</h1>}/>
                        <Route path="/:category" element={<Products/>}/>
                        <Route path="/:category/:id" element={<Detail/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </>
    );
}
