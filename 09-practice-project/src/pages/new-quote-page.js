import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useQuote from "../hooks/use-quote";

const NewQuotePage = (props) => {
  const navigate = useNavigate();
  const { addQuote, quoteProcessingState } = useQuote();

  const addQuoteHandler = (author, text) => {
    addQuote(author, text);

    // {quoteProcessingState === 2 && <Redirect to="/quotes" />}
  };

  useEffect(() => {
    if (quoteProcessingState === 2) {
      navigate("/quotes");
    }
  }, [quoteProcessingState, navigate]);

  return (
    <QuoteForm
      isLoading={quoteProcessingState === 1}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
};

export default NewQuotePage;
