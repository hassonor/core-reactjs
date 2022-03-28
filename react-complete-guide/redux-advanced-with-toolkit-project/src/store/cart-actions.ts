import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_FIREBASE_API_URL)
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));

        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }));
        }

    }
}

export const sendCartData = (cart: any) => {
    return async (dispatch: any) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));

        const sendRequest = async () => {
            const response = await fetch(process.env.REACT_APP_FIREBASE_API_URL,
                {method: 'PUT', body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})});

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!...',
                message: 'Sent cart data successfully'
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }

    }
};