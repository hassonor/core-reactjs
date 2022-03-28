import styles from './CommentItem.module.css';

interface CommentItemProps {
    text: string;
}

const CommentItem = (props: CommentItemProps): JSX.Element => {
    return (
        <li className={styles.item}>
            <p>{props.text}</p>
        </li>
    );
};

export default CommentItem;