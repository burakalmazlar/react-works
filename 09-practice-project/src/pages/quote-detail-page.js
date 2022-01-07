import { Fragment } from "react";
import { Link, Route, Routes, useParams, useLocation } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteCommentPage from "./quote-comment-page";

const QuoteDetailPage = (props) => {
  const location = useLocation();
  const pathVariables = useParams();
  const { id: quoteId } = pathVariables;
  const { quotes } = props;
  const quote = quotes && quotes.find((q) => q.id === quoteId);

  return (
    <>
      {quote ? (
        <Fragment>
          <HighlightedQuote quote={quote}></HighlightedQuote>
          <Routes>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to="comments">
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route
              path="comments"
              element={<QuoteCommentPage quote={quote} />}
            />
          </Routes>
        </Fragment>
      ) : (
        <NoQuotesFound></NoQuotesFound>
      )}
    </>
  );
};

export default QuoteDetailPage;
