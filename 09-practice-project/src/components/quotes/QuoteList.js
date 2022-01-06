import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import NoQuotesFound from "./NoQuotesFound";

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.length === 0 ? (
          <NoQuotesFound></NoQuotesFound>
        ) : (
          props.quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))
        )}
      </ul>
    </Fragment>
  );
};

export default QuoteList;