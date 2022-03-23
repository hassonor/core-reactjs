import styles from './AvailableMeals.module.css';
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_ITEMS = [
    {
        id: 'm1',
        name: 'Keta Keta',
        description: 'Finest fish and veggies',
        price: 10.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'Asian, Sushi,Vegan',
        price: 11.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 14.99,
    },
    {
        id: 'm4',
        name: 'Salmon Green Ring',
        description: 'Healthy...and green...',
        price: 19.99,
    },
];

const AvailableMeals = ():JSX.Element => {
    const mealsList = DUMMY_ITEMS.map(item=><MealItem key={item.id}
                                                      item={item} />);

    return (

        <section className={styles.meals}>
            <Card>
          <ul>
              {mealsList}
          </ul>
        </Card>
        </section>

    )
};


export default AvailableMeals;