const redux = require("redux");

const counterReducer = (oldState = { counter: 0 }, dispatchedAction) => {
  const { type } = dispatchedAction;

  let newState = { ...oldState };

  if (type === "increment") {
    newState = { counter: oldState.counter + 1 };
  } else if (type === "decrement") {
    newState = { counter: oldState.counter - 1 };
  }

  return newState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
