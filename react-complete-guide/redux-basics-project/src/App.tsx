import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile";
import {RootState} from './redux/Store';


function App() {
    const isAuth = useSelector((state: RootState) => state.authState.isAuthenticated)
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
