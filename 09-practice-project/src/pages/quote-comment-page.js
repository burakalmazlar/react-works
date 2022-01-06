import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteCommentPage = (props) => {
  const { quote } = props;
  return (
    <>
      {quote ? (
        <Comments quote={quote}></Comments>
      ) : (
        <NoQuotesFound></NoQuotesFound>
      )}
    </>
  );
};
export default QuoteCommentPage;
