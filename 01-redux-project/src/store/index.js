// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { auth: authReducer, counter: counterReducer },
});

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
