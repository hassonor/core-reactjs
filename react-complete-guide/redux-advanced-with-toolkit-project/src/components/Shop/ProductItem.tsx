import {cartActions} from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import ProductModel from "../../models/ProductModel";
import {useAppDispatch} from "../../store/store";


const ProductItem = (props: ProductModel) => {
    const dispatch = useAppDispatch();

    const {title, price, description, id} = props;

    const addToCartHandler = () => {


        // and then send Http request
        // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        );
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;