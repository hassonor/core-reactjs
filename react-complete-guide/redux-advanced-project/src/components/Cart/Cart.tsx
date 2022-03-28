import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useAppSelector} from "../../redux/hooks";

const Cart = () => {
    const cartItems = useAppSelector((state) => state.cartState.items);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
