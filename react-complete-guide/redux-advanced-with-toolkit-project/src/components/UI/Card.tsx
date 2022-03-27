import classes from './Card.module.css';

const Card = (props: any) => {
    return (
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}
        >
            {props.children}
        </section>
    );
};

export default Card;
