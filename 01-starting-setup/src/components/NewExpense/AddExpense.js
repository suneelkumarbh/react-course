import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const AddExpense = (props) => {
  const [btnClicked, setBtnClicked] = useState(true);
  const btcClickedHandler = (event) => {
    btnClicked ? setBtnClicked(false) : setBtnClicked(true);
  };

  if (btnClicked) {
    return (
      <div className="new-expense__controls">
        <div className="new-expense__actions">
          <button onClick={btcClickedHandler}>Add New Expense</button>
        </div>
      </div>
    );
  }

  return (
    <ExpenseForm
      onSaveExpenseData={props.onSaveExpenseData}
      onBtcClickedHandler={btcClickedHandler}
    />
  );
};
export default AddExpense;
