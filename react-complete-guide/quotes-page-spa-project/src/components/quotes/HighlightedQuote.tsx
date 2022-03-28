import styles from './HighlightedQuote.module.css';

interface HighlightedQuoteProps {
    text: string,
    author: string
}

const HighlightedQuote = (props: HighlightedQuoteProps) => {
    return (
        <figure className={styles.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    );
};

export default HighlightedQuote;