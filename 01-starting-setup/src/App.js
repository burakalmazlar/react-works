import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import EXPENSES_DATA from "./data/ExpensesData";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  const addExpenseHandler = (expenseData) => {
    setExpenses((prev) => [expenseData, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
