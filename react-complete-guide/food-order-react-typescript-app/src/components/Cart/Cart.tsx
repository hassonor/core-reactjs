import styles from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/contexts/cart-context";
import {useContext} from "react";
import CartItem from "./CartItem";
import FoodItemModel from "../../models/FoodItemModel";

const Cart= (props:any): JSX.Element => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id:string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item:FoodItemModel) => {
        cartCtx.addItem({...item, amount:1});
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;