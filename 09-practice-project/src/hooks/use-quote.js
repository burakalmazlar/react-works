import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/quote";

let initilized = false;

const useQuote = (props) => {
  const [quoteProcessingState, setQuoteProcessingState] = useState(0);

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
        fetchedQuotes.push({ id: key, ...quote });
      }
      dispatch(quoteActions.replace(fetchedQuotes));
    } catch (error) {
      alert(error.message);
    }
  }, [dispatch]);

  if (!initilized) {
    fetchQuotes();
    initilized = true;
  }

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

  const addComment = async (quote, text) => {
    try {
      const body = {};
      let { comments } = quote;
      if (!comments) {
        comments = [];
      }
      body[quote.id] = {
        ...quote,
        comments: [{ id: comments.length + 1, text }, ...comments],
      };

      const response = await fetch(
        "https://react-eab7b-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
        { method: "PATCH", body: JSON.stringify(body) }
      );
      if (!response.ok) {
        throw new Error("Firebase!");
      }
      await response.json();
      dispatch(quoteActions.comment({ quoteId: quote.id, text }));
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    quotes,
    addQuote,
    quoteProcessingState,
    addComment,
    fetchQuotes,
  };
};

export default useQuote;
