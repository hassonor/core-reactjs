import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartProvider from "./store/providers/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () =>{
        setCartIsShown(true);
    };

    const hideCartHandler = () =>{
        setCartIsShown(false);
    }
  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
      <main>
         <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
