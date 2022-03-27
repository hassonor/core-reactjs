import Card from '../UI/Card';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItem
                    item={{title: 'Test Item', quantity: 3, total: 18, price: 6}}
                />
            </ul>
        </Card>
    );
};

export default Cart;
