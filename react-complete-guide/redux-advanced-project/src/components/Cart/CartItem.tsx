import classes from './CartItem.module.css';
import {useAppDispatch} from "../../redux/hooks";
import {productAddedAction, productDeletedAction} from "../../redux/CartState";
import ProductModel from "../../models/ProductModel";


interface ProductCardProps {
    item: ProductModel;
}

const CartItem = (props: ProductCardProps) => {
    const dispatch = useAppDispatch();


    const removeItemHandler = () => {
        dispatch(productDeletedAction(props.item.id));
    };

    const addItemHandler = () => {
        dispatch(
            productAddedAction(props.item)
        );
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{props.item.title}</h3>
                <div className={classes.price}>
                    ${props.item.total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{props.item.quantity}</span>
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
