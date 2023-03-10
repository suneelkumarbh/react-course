import React from "react";
import AddExpense from "./AddExpense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expeseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expeseData);
    props.onAddExpense(expeseData);
  };
  return (
    <div className="new-expense">
      <AddExpense onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
