import { useEffect, useState } from "react";

const useForm = (elements = [], submit) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      elements.reduce((formValid, element) => formValid && element.valid, true)
    );
  }, [elements]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (valid) {
      submit(...elements.map((e) => e.value));
      elements.forEach((e) => e.reset());
    }
  };

  return { valid, onSubmit };
};

export default useForm;
