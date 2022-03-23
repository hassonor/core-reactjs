import React from 'react';
import CartItemModel from "../../models/CartItemModel";


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item:CartItemModel) =>{},
    removeItem: (id:string)=>{}
});


export default CartContext;