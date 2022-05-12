import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';


const time = new Date();

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column site-container">
                <header>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>amazona</Navbar.Brand>
                            </LinkContainer>
                        </Container>
                    </Navbar>
                </header>
                <main>
                    <Container className="mt-3">
                        <Routes>
                            <Route path="/product/:slug" element={<ProductScreen/>}/>
                            <Route path="/" element={<HomeScreen/>}/>
                        </Routes>
                    </Container>
                </main>
                <footer>
                    <div className="text-center">Wherever you are. CODE :) -OR-HASSON-{time.getFullYear()}</div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;