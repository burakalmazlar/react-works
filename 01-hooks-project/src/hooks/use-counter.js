import { useEffect, useState } from "react";

const useCounter = (step = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + step);
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, [step]);

  return counter;
};

export default useCounter;
