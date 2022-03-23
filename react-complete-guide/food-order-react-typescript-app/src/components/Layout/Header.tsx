import mealsImage from '../../assets/meals3.avif';
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props:any):JSX.Element => {
    return (
        <>
            <header className={styles.header}>
                <h1>Keta</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!!!" />
            </div>
        </>)
};


export default Header;