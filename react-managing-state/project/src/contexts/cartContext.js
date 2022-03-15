import React, {useEffect, useReducer, useContext} from 'react';
import cartReducer from "../reducers/cartReducer";

const CartContext = React.createContext(null);

let initialCart;

try {
    initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch (e) {
    console.error("Something went wrong with the Cart parsing.")
    initialCart = [];
}

const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);
    useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
    const contextValue = {
        cart,
        dispatch
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("useCart must be used within a CartProvider. " +
            "Wrap a parent component in <CartProvider> to fix this error");
    return context;
}

export {CartProvider};