import {useDispatch, useSelector} from 'react-redux';

import {uiActions} from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {RootState} from "../../store";

const CartButton = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
