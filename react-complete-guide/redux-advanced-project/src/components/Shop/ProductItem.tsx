import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useAppDispatch} from "../../redux/hooks";
import {productAddedAction} from "../../redux/CartState";
import ProductModel from "../../models/ProductModel";

interface ProductItemProps {
    item: ProductModel;
}

const ProductItem = (props: ProductItemProps) => {
    const dispatch = useAppDispatch();

    const addToCartHandler = () => {
        dispatch(
            productAddedAction(props.item)
        );
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{props.item.title}</h3>
                    <div className={classes.price}>${props.item.price.toFixed(2)}</div>
                </header>
                <p>{props.item.description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
