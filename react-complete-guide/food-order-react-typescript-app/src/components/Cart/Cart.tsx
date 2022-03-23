import styles from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartItemModel from "../../models/CartItemModel";
import {useCartContext} from "../../store/providers/CartProvider";

const Cart= (props:any): JSX.Element => {
    const cartCtx = useCartContext();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id:string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item:CartItemModel) => {
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