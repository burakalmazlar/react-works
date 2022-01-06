import { useState } from "react";
import useQuote from "../../hooks/use-quote";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const { addComment } = useQuote();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddComment = (comment) => {
    addComment(props.quote.id, comment);
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
      {props.quote.comments.map((c) => {
        return <p key={c.id}>{c.comment}</p>;
      })}
    </section>
  );
};

export default Comments;
