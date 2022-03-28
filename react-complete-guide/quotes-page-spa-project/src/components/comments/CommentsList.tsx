import CommentItem from './CommentItem';
import styles from './CommentsList.module.css';
import CommentModel from "../../model/CommentModel";

interface CommentListProps {
    comments: CommentModel[]
}

const CommentsList = (props: CommentListProps) => {
    return (
        <ul className={styles.comments}>
            {props.comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text}/>
            ))}
        </ul>
    );
};

export default CommentsList;