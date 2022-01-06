import { useState } from "react";
import useQuote from "../../hooks/use-quote";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const { addComment } = useQuote();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddComment = (text) => {
    addComment(props.quote, text);
    setIsAddingComment(false);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={onAddComment} />}
      <CommentsList comments={props.quote.comments || []} />
    </section>
  );
};

export default Comments;
