import { useState } from "react";
import Output from "./Output";

const Greeting = (props) => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <h2>Hello React!</h2>
      {!changedText && <Output>It's good to see you.</Output>}
      {changedText && <Output>Changed!</Output>}
      <button
        onClick={() => {
          setChangedText((state) => !state);
        }}
      >
        Change Text!
      </button>
    </div>
  );
};

export default Greeting;
