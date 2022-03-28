import {NavLink} from "react-router-dom";
import styles from './MainHeader.module.css';

const activeStyle = {
    color: "#e3f402",
    paddingBottom: "0.25rem",
    borderBottom: "4px solid #95bcf0"
}

const MainHeader = (): JSX.Element => {
    return (<header className={styles.header}>
        <nav>
            <ul>
                <li>
                    <NavLink style={({isActive}) =>
                        isActive ? activeStyle : undefined} to="/">Welcome</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) =>
                        isActive ? activeStyle : undefined} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>);
}

export default MainHeader;