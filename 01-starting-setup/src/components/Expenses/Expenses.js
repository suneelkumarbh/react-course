import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onYearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearSelect={onYearSelectHandler}
      />
      <ExpenseChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
};

export default Expenses;
