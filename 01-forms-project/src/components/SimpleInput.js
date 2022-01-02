import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";
import FormControl from "./FormControl";

const SimpleInput = (props) => {
  const {
    value: name,
    valid: nameIsValid,
    invalid: nameIsInvalid,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useInput((v) => v.length > 0);

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
      { value: email, valid: emailIsValid, reset: resetEmail },
    ],
    (name, email) => {
      console.log(name, email);
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
};

export default SimpleInput;
