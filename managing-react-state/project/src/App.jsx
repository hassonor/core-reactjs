import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import {Routes, Route} from "react-router-dom"
import Detail from "./Details";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function App() {
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) ?? [];
        } catch (e) {
            console.error("Something went wrong with the Cart parsing.")
            return [];
        }
    });
    useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

    const addToCart = (id, sku) => {
        setCart((items) => {
            const itemInCart = items.find((i) => i.sku === sku);
            if (itemInCart) {
                // Return a new array with the matching item replaced
                return items.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i)
            } else {
                // Return a new array with the new item appended.
                return [...items, {id, sku, quantity: 1}];
            }
        })
    }
    const updateQuantity = (sku, quantity) => {
        setCart((items) => {
            if (quantity === 0) {
                return items.filter((i) => i.sku !== sku);
            }
            return items.map((i) => i.sku === sku ? {...i, quantity} : i);
        })
    }

    const emptyCart = () => {
        setCart([]);
    }
    
    return (
        <>
            <div className="content">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<h1>Welcome to Rock Fitness</h1>}/>
                        <Route path="/:category" element={<Products/>}/>
                        <Route path="/:category/:id" element={<Detail addToCart={addToCart}/>}/>
                        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity}/>}/>
                        <Route path="/checkout" element={<Checkout cart={cart} emptyCart={emptyCart}/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </>
    );
}
