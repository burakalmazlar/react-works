import { Route } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import useQuote from "../hooks/use-quote";
import QuoteDetailPage from "./quote-detail-page";
import { Fragment } from "react";

let initilized = false;

const QuotesPage = (props) => {
  const { quotes, fetchQuotes } = useQuote();
  if (!initilized) {
    fetchQuotes();
    initilized = true;
  }
  return (
    <Fragment>
      <Route exact path="/quotes">
        <QuoteList quotes={quotes} />
      </Route>
      <Route path="/quotes/:id">
        <QuoteDetailPage />
      </Route>
    </Fragment>
  );
};

export default QuotesPage;
