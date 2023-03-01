import React from 'react'
// import AddExpenseForm from './AddExpenseForm';
import ExpenseItem from './ExpenseItem';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
const ExpenseList = () => {
  

  const {expenses} = useContext(AppContext);
  return (
    <>
      <h2>Expenses</h2>
        <ul className='list-group'>
          {expenses.map((item)=>{
return <ExpenseItem id={item.id}  name = {item.name} cost={item.cost} ></ExpenseItem>
          })}
        </ul>
    </>
  )
}

export default ExpenseList