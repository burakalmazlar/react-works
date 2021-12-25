import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const clickHandler = () => {
    console.log(new Date().toUTCString());
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
