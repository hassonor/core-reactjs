import ProductModel from "../models/ProductModel";

export class CartState {
    public items: ProductModel[] = [];
    public totalQuantity: number = 0;
}


export enum CartActionType {
    ProductAdded = "ProductAdded",
    ProductDeleted = "ProductDeleted"
}

export interface CartAction {
    type: CartActionType;
    payload?: any;
}


export function productAddedAction(addedProduct: ProductModel): CartAction {
    return {type: CartActionType.ProductAdded, payload: addedProduct};
}


export function productDeletedAction(id: string): CartAction {
    return {type: CartActionType.ProductDeleted, payload: id};
}

// Products Reducer:
export function cartReducer(currentState: CartState = new CartState(), action: CartAction): CartState {

    const newState = {...currentState};

    switch (action.type) {
        case CartActionType.ProductAdded:
            const existingItem = newState.items.find((item) => item.id === action.payload.id);
            newState.totalQuantity++;
            if (!existingItem) {
                newState.items.push({
                    id: action.payload.id,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price,
                    title: action.payload.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price;
            }
            break;

        case CartActionType.ProductDeleted:
            const id = action.payload;
            const existingItem_delete = newState.items.find(item => item.id === id);
            newState.totalQuantity--;
            if (existingItem_delete.quantity === 1) {
                newState.items = newState.items.filter(item => item.id !== id);
            } else {
                existingItem_delete.quantity--;
            }
            break;

        default:
            return newState;
    }

    return newState;

}