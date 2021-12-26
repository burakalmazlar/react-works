import "./ExpenseFormActions.css";

const ExpenseFormActions = (props) => {
  if (!props.visible) {
    return "";
  }

  return (
    <div className="new-expense__actions">
      <button type="reset">Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  );
};

export default ExpenseFormActions;
