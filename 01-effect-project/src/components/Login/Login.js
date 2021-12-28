import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Text from "../UI/Input/Text";

const Login = (props) => {
  const [emailState, dispatchEmailState] = useReducer(
    (prev, action) => {
      let email = "";
      if (action.type === 1) {
        email = action.email;
      } else if (action.type === 2) {
        email = prev.email;
      }
      return {
        email: email,
        isValid: email.includes("@"),
      };
    },
    {
      email: "",
      isValid: undefined,
    }
  );

  const [passwordState, dispatchPasswordState] = useReducer(
    (prev, action) => {
      let password = "";
      if (action.type === 1) {
        password = action.password;
      } else if (action.type === 2) {
        password = prev.password;
      }
      return {
        password: password,
        isValid: password.trim().length > 4,
      };
    },
    {
      password: "",
      isValid: undefined,
    }
  );

  // useEffect(() => {
  //   console.log("RUNS ON EVERY STATE CHANGE.");
  // });

  const emailInputRef = useRef();
  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: 1, email: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: 1, password: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: 2 });
  };
  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: 2 });
  };

  const authCtx = useContext(AuthContext);
  const { email } = emailState;
  const { password } = passwordState;
  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(email, password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Text
          ref={emailInputRef}
          label={`E-Mail`}
          id={`email`}
          isValid={emailIsValid}
          type={`email`}
          value={email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Text
          label={`Password`}
          id={`password`}
          isValid={passwordIsValid}
          type={`password`}
          value={password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
