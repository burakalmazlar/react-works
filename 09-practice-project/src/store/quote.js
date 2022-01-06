import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: { quotes: [] },
  reducers: {
    add: (state, action) => {
      state.quotes.push({
        id: action.payload.id,
        author: action.payload.author,
        text: action.payload.text,
        comments: [],
      });
    },
    comment: (state, action) => {
      const quote = state.quotes.find((q) => q.id === action.payload.quoteId);
      quote.comments.push({
        id: quote.comments.length + 1,
        comment: action.payload.comment,
      });
    },
    replace: (state, action) => {
      state.quotes = action.payload;
    },
  },
});

export const quoteActions = quoteSlice.actions;
export default quoteSlice.reducer;
