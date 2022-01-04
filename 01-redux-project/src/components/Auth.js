import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/use-auth";
import { authActions } from "../store/index";
import classes from "./Auth.module.css";
import useInput from "../hooks/use-input";
import useForm from "../hooks/use-form";
import FormControl from "./FormControl";

const Auth = () => {
  const { login } = useAuth();

  const {
    value: email,
    valid: emailIsValid,
    invalid: emailIsInvalid,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput((v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v));

  const {
    value: password,
    valid: passwordIsValid,
    invalid: passwordIsInvalid,
    onChange: onPasswordChange,
    onBlur: onPasswordBlur,
    reset: resetPassword,
  } = useInput((v) => v.length > 3);

  const { valid: formIsValid, onSubmit: onFormSubmit } = useForm(
    [
      { value: password, valid: passwordIsValid, reset: resetPassword },
      { value: email, valid: emailIsValid, reset: resetEmail },
    ],
    (email, password) => {
      login(email, password);
    }
  );

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmit}>
          <FormControl
            id="email"
            label="E-Mail"
            type="email"
            value={email}
            invalid={emailIsInvalid}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
            error="E-Mail is invalid."
          />
          <FormControl
            id="password"
            label="Password"
            type="password"
            value={password}
            invalid={passwordIsInvalid}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
            error="Password is invalid."
          />
          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Auth;
