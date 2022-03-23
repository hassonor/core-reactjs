import {useContext, useEffect, useState} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/contexts/cart-context";

const HeaderCartButton = (props:any):JSX.Element => {
    const [highlightedButton, setHighlightedButton] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount},0);

    const btnClasses = `${styles.button} ${highlightedButton ? styles.bump : ''}`;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setHighlightedButton(true);
        const timer =  setTimeout(()=>{
            setHighlightedButton(false);
        },300)

        return ()=>{
            clearTimeout(timer);
        }
    },[cartCtx.items])

    return (
                <button className={btnClasses} onClick={props.onClick}>
                    <span className={styles.icon}>
                        <CartIcon/>
                    </span>
                    <span>
                        Your Cart
                    </span>
                    <span className={styles.badge}>{numberOfCartItems}</span>
                </button>
     )
};


export default HeaderCartButton;