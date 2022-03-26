import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import {useAppSelector} from './redux/hooks';


function App() {
    const isAuth = useAppSelector((state) => state.authState.isAuthenticated)
    return (
        <>
            <Header/>
            {!isAuth && <Auth/>}
            {isAuth && <UserProfile/>}
            <Counter/>
        </>
    );
}

export default App;
