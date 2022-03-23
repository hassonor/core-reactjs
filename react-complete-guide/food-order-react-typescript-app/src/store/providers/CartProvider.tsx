import {ReactNode, useContext, useReducer} from 'react';

import CartContext from '../contexts/cart-context';
import CartItemModel from "../../models/CartItemModel";


class CartState {
    public items: CartItemModel[] = [];
    public totalAmount: number;
}

enum CartActionType {
    AddItem = "AddItem",
    RemoveItem = "RemoveItem",
}

interface CartAction {
    item?: any;
    type: CartActionType;
    id?:string;
}


let defaultCartState: { totalAmount: number; items: CartItemModel[] };

defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state:CartState = new CartState(), action:CartAction) => {
    if (action.type === CartActionType.AddItem) {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === CartActionType.RemoveItem) {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
};

interface CartProviderProps {
    children: ReactNode;
}

const CartProvider = ({children}: CartProviderProps) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item:CartItemModel) => {
        dispatchCartAction({ type: CartActionType.AddItem, item: item });
    };

    const removeItemFromCartHandler = (id:string) => {
        dispatchCartAction({ type: CartActionType.RemoveItem, id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export function useCartContext(){
    const context = useContext(CartContext);

    if(context === undefined){
        throw new Error('useCartContext should be used within an CartProvider');
    }
    return context;
}

export default CartProvider;