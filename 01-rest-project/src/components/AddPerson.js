import React from "react";
import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";

import FormControl from "./FormControl";

function AddPerson(props) {
  const {
    value: name,
    valid: nameIsValid,
    invalid: nameIsInvalid,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useInput((v) => v.length > 0);

  const {
    value: age,
    valid: ageIsValid,
    invalid: ageIsInvalid,
    onChange: onAgeChange,
    onBlur: onAgeBlur,
    reset: resetAge,
  } = useInput((v) => +v > 0);

  const {
    value: email,
    valid: emailIsValid,
    invalid: emailIsInvalid,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput((v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v));

  const { valid: formIsValid, onSubmit: onFormSubmit } = useForm(
    [
      { value: name, valid: nameIsValid, reset: resetName },
      { value: age, valid: ageIsValid, reset: resetAge },
      { value: email, valid: emailIsValid, reset: resetEmail },
    ],
    (name, age, email) => {
      console.log(name, age, email);
      const person = {
        name,
        age,
        email,
      };
      props.onAddPerson(person);
    }
  );

  return (
    <form onSubmit={onFormSubmit}>
      <FormControl
        id="name"
        label="Your Name"
        type="text"
        value={name}
        invalid={nameIsInvalid}
        onChange={onNameChange}
        onBlur={onNameBlur}
        error="Name is invalid."
      />
      <FormControl
        id="age"
        label="Your Age"
        type="text"
        value={age}
        invalid={ageIsInvalid}
        onChange={onAgeChange}
        onBlur={onAgeBlur}
        error="Age is invalid."
      />
      <FormControl
        id="email"
        label="Your E-Mail"
        type="email"
        value={email}
        invalid={emailIsInvalid}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
        error="E-Mail is invalid."
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default AddPerson;
