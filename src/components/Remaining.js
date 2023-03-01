import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
const Remaining = () => {

 const {budget,expenses} = useContext(AppContext)

  function calculateRemaining(){
    let totalExpense = expenses.reduce((acc,curr)=>{
acc+=curr.cost;

return acc;
    },0)
    return budget-totalExpense;
  }

  return (
    <div className='alert alert-success'>

    <span>Remaining: Rs {calculateRemaining()}</span>
  </div>
  )
}

export default Remaining