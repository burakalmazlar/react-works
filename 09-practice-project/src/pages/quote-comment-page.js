import Comments from "../components/comments/Comments";

const QuoteCommentPage = (props) => {
  return <Comments quote={props.quote}></Comments>;
};
export default QuoteCommentPage;
