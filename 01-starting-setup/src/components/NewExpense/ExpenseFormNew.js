const ExpenseFormNew = (props) => {
  if (!props.visible) {
    return "";
  }
  return <button onClick={props.onNew}>Add New Expense</button>;
};

export default ExpenseFormNew;
