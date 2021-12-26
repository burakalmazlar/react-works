import "./ExpenseFormControls.css";

const ExpenseFormControls = (props) => {
  if (!props.visible) {
    return "";
  }

  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={props.enteredTitle}
          onChange={props.titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={props.enteredAmount}
          onChange={props.amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-01-01"
          value={props.enteredDate}
          onChange={props.dateChangeHandler}
        />
      </div>
    </div>
  );
};

export default ExpenseFormControls;
