import styles from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartItemModel from "../../models/CartItemModel";
import {useCartContext} from "../../store/providers/CartProvider";
import Checkout from "./Checkout";
import {useState} from "react";


const Cart = (props: any): JSX.Element => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useCartContext();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item: CartItemModel) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = (userData: any) => {
        console.log(userData);
        setDidSubmit(true);
        cartCtx.clearCart();
    }


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


    const modalActions = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={styles.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>
            )}
            {!isCheckout && modalActions}
        </>
    );


    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={styles.actions}>
                <button className={styles.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        <Modal onClose={props.onClose}>
            {!didSubmit && cartModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    );
};
export default Cart;