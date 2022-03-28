import {useSelector} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {RootState, useAppDispatch, useAppSelector} from "./store/store";
import {useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const dispatch = useAppDispatch();
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    const cart = useAppSelector(state => state.cart);
    const notification = useAppSelector(state => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }));
            const response = await fetch(`${process.env.REACT_APP_FIREBASE_API_URL}`,
                {method: 'PUT', body: JSON.stringify(cart)});

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!...',
                message: 'Sent cart data successfully'
            }));
        }

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch(error => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        });

    }, [cart, dispatch])


    return (
        <>
            {notification && <Notification notification={notification}/>}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;
