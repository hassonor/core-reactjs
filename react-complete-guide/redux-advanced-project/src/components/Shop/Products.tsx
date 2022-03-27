import ProductItem from './ProductItem';
import styles from './Products.module.css';
import ProductModel from "../../models/ProductModel";

const Products = (): JSX.Element => {
    const p: ProductModel = {title: "Test", price: 6, description: "This is a first product"}
    return (
        <section className={styles.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    product={p}/>
            </ul>
        </section>
    );
};

export default Products;
