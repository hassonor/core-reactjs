import classes from './CartItem.module.css';
import {useAppDispatch} from "../../redux/hooks";
import {productAddedAction, productDeletedAction} from "../../redux/CartState";
import ProductModel from "../../models/ProductModel";


interface ProductCardProps {
    item: ProductModel;
}

const CartItem = (props: ProductCardProps) => {
    const dispatch = useAppDispatch();

    const {title, quantity, total, price, id} = props.item;

    const removeItemHandler = () => {
        dispatch(productDeletedAction(id));
    };

    const addItemHandler = () => {
        dispatch(
            productAddedAction({
                id,
                title,
                price
            })
        );
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
