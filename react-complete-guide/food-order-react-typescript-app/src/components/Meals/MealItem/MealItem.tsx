import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import FoodItemModel from "../../../models/FoodItemModel";
import {useCartContext} from "../../../store/providers/CartProvider";


interface Props {
    item: FoodItemModel
}

const MealItem = ({item}: Props):JSX.Element => {
   const price = `$${item.price.toFixed(2)}`;
    const cartCtx = useCartContext();

   const addToCartHandler = (amount:number):void => {
       cartCtx.addItem({
           id: item.id,
           name: item.name,
           amount,
           price: item.price
       });
   };


    return (
        <li className={styles.meal} >
            <div><h3>{item.name}</h3>
            <div className={styles.description}>{item.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={item.id} />
            </div>
        </li>
    )
};


export default MealItem;