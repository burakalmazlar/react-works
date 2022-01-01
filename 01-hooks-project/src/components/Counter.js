import { useState } from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const Counter = () => {
  const [step, setStep] = useState(1);
  const count = useCounter(step);

  return (
    <Card>
      {count}
      <div>
        <button
          onClick={() => {
            setStep((prev) => prev * -1);
          }}
        >
          Switch Direction
        </button>
      </div>
    </Card>
  );
};

export default Counter;
