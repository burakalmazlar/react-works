import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteCommentPage from "./quote-comment-page";

const QuoteDetailPage = (props) => {
  const params = useParams();
  const { quotes } = props;
  const quote = quotes && quotes.find((q) => q.id === params.id);

  return (
    <>
      {quote ? (
        <Fragment>
          <HighlightedQuote quote={quote}></HighlightedQuote>
          <Route path={`/quotes/${params.id}/comments`}>
            <QuoteCommentPage quote={quote} />
          </Route>
        </Fragment>
      ) : (
        <NoQuotesFound></NoQuotesFound>
      )}
    </>
  );
};

export default QuoteDetailPage;
