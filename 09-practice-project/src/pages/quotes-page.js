import { Route } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import useQuote from "../hooks/use-quote";
import QuoteDetailPage from "./quote-detail-page";
import { Fragment } from "react";

const QuotesPage = (props) => {
  const { quotes } = useQuote();
  return (
    <Fragment>
      <Route exact path="/quotes">
        <QuoteList quotes={quotes} />
      </Route>
      <Route path="/quotes/:id">
        <QuoteDetailPage quotes={quotes} />
      </Route>
    </Fragment>
  );
};

export default QuotesPage;
