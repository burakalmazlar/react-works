import { Route, Routes } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import useQuote from "../hooks/use-quote";
import QuoteDetailPage from "./quote-detail-page";

const QuotesPage = (props) => {
  const { quotes } = useQuote();
  return (
    <Routes>
      <Route path="" element={<QuoteList quotes={quotes} />} />
      <Route path=":id/*" element={<QuoteDetailPage quotes={quotes} />} />
    </Routes>
  );
};

export default QuotesPage;
