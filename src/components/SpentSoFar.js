import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
const SpentSoFar = () => {
const {expenses} = useContext(AppContext)

 function calculateSpentSoFar(){
  let totalExpense = expenses.reduce((acc,curr)=>{
    acc += curr.cost;
    return acc
  },0)
  return totalExpense
 }

  return (
    <div className='alert alert-primary'>

    <span>SpentSoFar: Rs {calculateSpentSoFar()}</span>
  </div>
  )
}

export default SpentSoFar