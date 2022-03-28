import {useSelector} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {RootState, useAppDispatch, useAppSelector} from "./store/store";
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";


let isInitial = true;

function App() {
    const dispatch = useAppDispatch();
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    const cart = useAppSelector(state => state.cart);
    const notification = useAppSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch])


    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }
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
