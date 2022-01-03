// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggle(state, action) {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const TOGGLE = "TOGGLE";

// const counterReducer = (state = initial, action) => {
//   const { type } = action;

//   const newState = { ...state };

//   if (type === INCREMENT) {
//     newState.counter = state.counter + 1;
//   } else if (type === DECREMENT) {
//     newState.counter = state.counter - 1;
//   } else if (type === TOGGLE) {
//     newState.show = !state.show;
//   }

//   return newState;
// };

// const store = createStore(counterReducer);

// export default store;
