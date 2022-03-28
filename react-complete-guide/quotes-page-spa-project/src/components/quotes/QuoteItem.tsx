import {Link} from 'react-router-dom';

import styles from './QuoteItem.module.css';
import QuoteModel from "../../model/QuoteModel";

const QuoteItem = (props: QuoteModel) => {
    return (
        <li className={styles.item}>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Link className='btn' to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    );
};

export default QuoteItem;