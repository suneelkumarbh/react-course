import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = 'Car insurance';
  // const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!')
  };

  return (
    <Card className = 'expense-item'>
      <ExpenseDate date={props.date}/>
      <div className = 'expense-item__description'>
        <h2>{title}</h2>
        <div className = 'expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;