import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import NoQuotesFound from "./NoQuotesFound";

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const sort = queryParams.get("sort") === "asc" ? 1 : -1;

  const sortedQuotes = props.quotes.slice(0).sort((a, b) => {
    return a.text > b.text ? sort : -1 * sort;
  });

  const onChangeSorting = () => {
    navigate("/quotes?sort=" + (sort === 1 ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onChangeSorting}>
          Sort {sort === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.length === 0 ? (
          <NoQuotesFound></NoQuotesFound>
        ) : (
          sortedQuotes.map((quote) => (
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
