import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AuthLogoutAction} from "../redux/AuthState";
import {RootState} from "../redux/Store";

const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    const logoutHandler = () => {

        dispatch(AuthLogoutAction());

    }
    const isAuth = useSelector((state: RootState) => state.authState.isAuthenticated);
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (<nav>
                <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>)}
        </header>
    );
};

export default Header;
