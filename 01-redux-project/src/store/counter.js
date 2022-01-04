import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, show: true },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
    toggle(state, action) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
