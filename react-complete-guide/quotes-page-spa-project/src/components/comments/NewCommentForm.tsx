import {useRef, useEffect, SyntheticEvent} from 'react';

import useHttp from '../../hooks/use-http';
import {addComment} from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

interface NewCommentFormProps {
    quoteId: string
    onAddedComment: () => void;
}

const NewCommentForm = (props: NewCommentFormProps): JSX.Element => {
    const commentTextRef = useRef<HTMLTextAreaElement | null>(null);

    const {sendRequest, status, error} = useHttp(addComment);

    const {onAddedComment} = props;

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const submitFormHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        const enteredText = commentTextRef.current.value;

        // optional: Could validate here

        sendRequest({commentData: {text: enteredText}, quoteId: props.quoteId});
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className='centered'>
                    <LoadingSpinner/>
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea {...{id: "comment", row: "5"}} ref={commentTextRef}/>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;