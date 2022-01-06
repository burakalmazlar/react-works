import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useQuote from "../hooks/use-quote";
import QuoteCommentPage from "./quote-comment-page";

const QuoteDetailPage = (props) => {
  const { findQuote } = useQuote();
  const params = useParams();
  const quote = findQuote(params.id);

  return (
    <Fragment>
      <HighlightedQuote quote={quote}></HighlightedQuote>
      <Route path={`/quotes/${params.id}/comments`}>
        <QuoteCommentPage quote={quote} />
      </Route>
    </Fragment>
  );
};

export default QuoteDetailPage;
