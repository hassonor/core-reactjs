import {Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App(): JSX.Element {
    return (
        <>
            <MainHeader/>
            <main>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
