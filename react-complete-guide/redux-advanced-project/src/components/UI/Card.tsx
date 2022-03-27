import styles from './Card.module.css';

const Card = (props: any): JSX.Element => {
    return (
        <section
            className={`${styles.card} ${props.className ? props.className : ''}`}
        >
            {props.children}
        </section>
    );
};

export default Card;
