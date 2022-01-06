import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/quote";

const useQuote = (props) => {
  const [quoteProcessingState, setQuoteProcessingState] = useState(0);
  const [quoteId, setQuoteId] = useState(null);

  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quote.quotes);

  const fetchQuotes = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"
      );
      if (!response.ok) {
        throw new Error("Firebase!");
      }
      const data = await response.json();
      const fetchedQuotes = [];
      for (const key in data) {
        const quote = data[key];
        fetchedQuotes.push({ id: key, author: quote.author, text: quote.text });
      }
      dispatch(quoteActions.replace(fetchedQuotes));
    } catch (error) {
      alert(error.message);
    }
  }, [dispatch]);

  const addQuote = async (author, text) => {
    setQuoteProcessingState(1);
    try {
      const response = await fetch(
        "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
        { method: "POST", body: JSON.stringify({ author, text }) }
      );
      if (!response.ok) {
        throw new Error("Firebase!");
      }
      const data = await response.json();
      dispatch(quoteActions.add({ id: data.name, author, text }));
      setQuoteProcessingState(2);
    } catch (error) {
      alert(error.message);
    }
  };

  const findQuote = useCallback(
    (id) => {
      return quotes.find((q) => q.id === id);
    },
    [quotes]
  );

  const addComment = (quoteId, comment) => {
    dispatch(quoteActions.comment({ quoteId, comment }));
    setQuoteId(quoteId);
  };

  const patchQuote = useCallback(
    async (qid) => {
      try {
        const q = findQuote(qid);
        const body = {};
        body[q.id] = { author: q.author, text: q.text, comments: q.comments };

        const response = await fetch(
          "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
          { method: "PATCH", body: JSON.stringify(body) }
        );
        if (!response.ok) {
          throw new Error("Firebase!");
        }
        await response.json();
        setQuoteId(null);
        //   dispatch(quoteActions.add({ id: data.name, author, text }));
      } catch (error) {
        alert(error.message);
      }
    },
    [findQuote]
  );

  useEffect(() => {
    if (quoteId) {
      patchQuote(quoteId);
    }
  }, [quoteId, patchQuote]);

  return {
    quotes,
    addQuote,
    quoteProcessingState,
    findQuote,
    addComment,
    fetchQuotes,
  };
};

export default useQuote;
