import { Link, Route } from "react-router-dom";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const { quote } = props;
  return (
    <section>
      <figure className={classes.quote}>
        <p>{quote.text}</p>
        <figcaption>{quote.author}</figcaption>
      </figure>
      <Route exact path={`/quotes/${quote.id}`}>
        <Link
          className="btn--flat centered"
          to={`/quotes/${quote.id}/comments`}
        >
          Load Comments
        </Link>
      </Route>
    </section>
  );
};

export default HighlightedQuote;
