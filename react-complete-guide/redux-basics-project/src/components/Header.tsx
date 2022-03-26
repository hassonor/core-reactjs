import classes from './Header.module.css';
import {AuthLogoutAction} from "../redux/AuthState";
import {useAppDispatch, useAppSelector} from "../redux/hooks";

const Header = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const logoutHandler = () => {
        dispatch(AuthLogoutAction());
    }
    const isAuth = useAppSelector((state) => state.authState.isAuthenticated);
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
