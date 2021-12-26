import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseFormActions from "./ExpenseFormActions";
import ExpenseFormControls from "./ExpenseFormControls";
import ExpenseFormNew from "./ExpenseFormNew";

const ExpenseForm = (props) => {
  const [showControls, setShowControls] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // Single State Approach
  // const [entered, setEntered] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (e) => {
  //   setEntered((prevState) => {
  //     return { ...prevState, enteredTitle: e.target.value };
  //   });
  // };
  // const amountChangeHandler = (e) => {
  //   setEntered((prevState) => {
  //     return { ...prevState, enteredAmount: e.target.value };
  //   });
  // };
  // const dateChangeHandler = (e) => {
  //   setEntered((prevState) => {
  //     return { ...prevState, enteredDate: e.target.value };
  //   });
  // };

  const clearForm = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    clearForm();
  };

  const switchControls = (e) => {
    setShowControls((prev) => !prev);
    clearForm();
  };

  return (
    <form onSubmit={submitHandler} onReset={switchControls}>
      <ExpenseFormNew visible={!showControls} onNew={switchControls} />
      <ExpenseFormControls
        visible={showControls}
        enteredTitle={enteredTitle}
        titleChangeHandler={titleChangeHandler}
        enteredAmount={enteredAmount}
        amountChangeHandler={amountChangeHandler}
        enteredDate={enteredDate}
        dateChangeHandler={dateChangeHandler}
      />
      <ExpenseFormActions visible={showControls} />
    </form>
  );
};

export default ExpenseForm;
