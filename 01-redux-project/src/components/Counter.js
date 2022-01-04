import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { INCREMENT, DECREMENT, TOGGLE } from "../store/index";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const step = useRef();

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.show);

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment(+step.current.value));
  };
  const decrementHandler = () => {
    // dispatch({ type: DECREMENT });
    dispatch(counterActions.decrement(+step.current.value));
  };
  const toggleHandler = () => {
    // dispatch({ type: TOGGLE });
    dispatch(counterActions.toggle({}));
  };

  return (
    <main className={classes.counter}>
      <button onClick={toggleHandler}>Toggle Counter</button>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <input
          type="number"
          step="1"
          ref={step}
          defaultValue="1"
          min="1"
          max="5"
        />
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
    </main>
  );
};

export default Counter;
