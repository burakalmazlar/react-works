import { Redirect } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useQuote from "../hooks/use-quote";

const NewQuotePage = (props) => {
  const { addQuote, quoteProcessingState } = useQuote();

  return (
    <>
      <QuoteForm
        isLoading={quoteProcessingState === 1}
        onAddQuote={addQuote}
      ></QuoteForm>
      {quoteProcessingState === 2 && <Redirect to="/quotes" />}
    </>
  );
};

export default NewQuotePage;
