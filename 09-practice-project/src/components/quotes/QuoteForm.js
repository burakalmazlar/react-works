import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [formHasChanges, setFormHasChanges] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const formIsValid = enteredAuthor.length > 0 && enteredText.length > 0;
    if (formIsValid) {
      props.onAddQuote(enteredAuthor, enteredText);
    }
  }

  const leaveHandler = (location) => {
    return "Are you sure navigating to '" + location.pathname + "' ?";
  };

  return (
    <Card>
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={() => setFormHasChanges(true)}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button
            type="submit"
            onClick={() => setFormHasChanges(false)}
            className="btn"
          >
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
