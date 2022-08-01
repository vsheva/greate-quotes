import React, { useEffect, useRef } from 'react';

import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

const NewCommentForm = props => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();
  const { onAddComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) onAddComment();
  }, [status, error, onAddComment]);

  const submitFormHandler = event => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId }); //??? 15:32 отправляем наш fetch-запрос
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
