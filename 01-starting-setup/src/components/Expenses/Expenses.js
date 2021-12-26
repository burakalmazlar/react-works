import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState(2021);

  const filterExpenses = (year) => {
    setYear(year);
  };

  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterExpenses={filterExpenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
