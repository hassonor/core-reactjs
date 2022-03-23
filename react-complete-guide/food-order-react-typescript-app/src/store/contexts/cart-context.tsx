import React from 'react';
import CartItemModel from "../../models/CartItemModel";


interface CartContextValues{
    items: CartItemModel[],
    totalAmount: number,
    addItem: (item:CartItemModel) => void,
    removeItem: (id:string)=> void
}

const CartContext = React.createContext<undefined | CartContextValues>(undefined);


export default CartContext;