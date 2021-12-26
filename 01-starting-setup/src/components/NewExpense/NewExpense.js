import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseId, setExpenseId] = useState(1);

  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: expenseId,
    };
    props.onAddExpense(expenseData);
    setExpenseId((prev) => ++prev);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
