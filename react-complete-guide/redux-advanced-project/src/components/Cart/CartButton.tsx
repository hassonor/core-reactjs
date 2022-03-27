import classes from './CartButton.module.css';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {toggleAction} from "../../redux/UiState";

const CartButton = () => {
    const dispatch = useAppDispatch();
    const cartQuantity = useAppSelector((state) => state.cartState.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(toggleAction());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
