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
    payload?: any; // מטען שילוח
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
        case CartActionType.ProductAdded: {
            const newItem = action.payload;
            const indexToUpdate = newState.items.findIndex(c => c.id === action.payload.id);
      
            newState.totalQuantity++;
            if (indexToUpdate === -1) {
                newState.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                newState.items[indexToUpdate].quantity++;
                newState.items[indexToUpdate].totalPrice = newState.items[indexToUpdate].totalPrice + newItem.price;
            }
            break;

        }

        case CartActionType.ProductDeleted: {
            const id = action.payload;
            const existingItem = newState.items.find(item => item.id === id);
            newState.totalQuantity--;
            if (existingItem.quantity === 1) {
                newState.items = newState.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
            break;
        }
    }

    return newState;

}