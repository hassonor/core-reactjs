import CartButton from '../Cart/CartButton';
import styles from './MainHeader.module.css';

const MainHeader = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
