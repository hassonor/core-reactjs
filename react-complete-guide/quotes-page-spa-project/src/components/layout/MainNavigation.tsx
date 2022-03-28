import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';

const activeStyle = {
    color: "#e3f402",
    paddingBottom: "0.25rem",
    borderBottom: "4px solid #95bcf0"
}


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink style={({isActive}) =>
                            isActive ? activeStyle : undefined} to='/quotes'>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive}) =>
                            isActive ? activeStyle : undefined} to='/new-quote'>
                            Add a Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;