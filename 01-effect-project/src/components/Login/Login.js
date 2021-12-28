import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

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
  //   console.log("EFFECT RUNS ON EVERY STATE CHANGE.");
  // });

  // useEffect(() => {
  //   console.log("EFFECT RUNS ONCE COMPONENT EVALUATED.");
  // }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    const enteredEmail = event.target.value;
    dispatchEmailState({ type: 1, email: enteredEmail });
  };

  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    dispatchPasswordState({ type: 1, password: enteredPassword });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: 2 });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: 2 });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.email, passwordState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
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
