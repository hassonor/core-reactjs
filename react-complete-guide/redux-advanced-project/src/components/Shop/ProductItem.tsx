import Card from '../UI/Card';
import styles from './ProductItem.module.css';
import ProductModel from "../../models/ProductModel";


interface ProductItemProps {
    product: ProductModel;
}

const ProductItem = (props: ProductItemProps) => {

    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{props.product.title}</h3>
                    <div className={styles.price}>${props.product.price.toFixed(2)}</div>
                </header>
                <p>{props.product.description}</p>
                <div className={styles.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
