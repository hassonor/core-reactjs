import React, {useEffect, useReducer} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import {Routes, Route} from "react-router-dom"
import Detail from "./Details";
import Cart from "./Cart";
import Checkout from "./Checkout";
import cartReducer from "./reducers/cartReducer";

let initialCart;

try {
    initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch (e) {
    console.error("Something went wrong with the Cart parsing.")
    initialCart = [];
}

export default function App() {
    const [cart, dispatch] = useReducer(cartReducer, initialCart, undefined);
    useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

    return (
        <>
            <div className="content">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<h1>Welcome to Rock Fitness</h1>}/>
                        <Route path="/:category" element={<Products/>}/>
                        <Route path="/:category/:id" element={<Detail dispatch={dispatch}/>}/>
                        <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch}/>}/>
                        <Route path="/checkout" element={<Checkout cart={cart} dispatch={dispatch}/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </>
    );
}
