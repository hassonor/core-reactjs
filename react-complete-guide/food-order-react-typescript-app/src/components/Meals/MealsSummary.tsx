import styles from './MealsSummary.module.css';

const MealsSummary = ():JSX.Element => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Enjoy the Sunset in the comfort of your home or office with an Keta delivery in Israel.
                Sunset is the name of the highly recommended spicy salmon sushi dish that
                has helped spread the good word about this Japanese-style restaurant.
            </p>
            <p>
                The Keta menu is filled with many more temptations served to discerning customers
                since 2022.
            </p>
        </section>
    );
};

export default MealsSummary;