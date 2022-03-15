export default function cartReducer(cart, action) {
    switch (action.type) {
        case "EMPTY_CART":
            return [];
        case "ADD_TO_CART": {
            const {id, sku} = action;
            const itemInCart = cart.find((i) => i.sku === sku);
            if (itemInCart) {
                // Return a new array with the matching item replaced
                return cart.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i)
            } else {
                // Return a new array with the new item appended.
                return [...cart, {id, sku, quantity: 1}];
            }
        }
        case "UPDATE_QUANTITY": {
            const {sku, quantity} = action;
            if (quantity === 0) {
                return cart.filter((i) => i.sku !== sku);
            }
            return cart.map((i) => i.sku === sku ? {...i, quantity} : i);
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}