import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useAppSelector} from "./redux/hooks";

function App() {
    const showCart = useAppSelector(state => state.uiState.cartIsVisible);

    return (
        <Layout>
            {showCart && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
