import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validate(value);
  const valueIsInvalid = !valueIsValid && valueTouched;

  const onValueChange = (e) => setValue(e.target.value);
  const onValueBlur = (e) => setValueTouched(true);

  const reset = () => {
    setValue("");
    setValueTouched(false);
  };

  return {
    value,
    valid: valueIsValid,
    invalid: valueIsInvalid,
    onChange: onValueChange,
    onBlur: onValueBlur,
    reset,
  };
};

export default useInput;
