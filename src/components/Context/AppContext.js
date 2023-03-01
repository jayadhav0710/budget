import { createContext,useReducer } from "react";

const initialState = {
  budget: 2000,
   expenses:[
    {id: 12, name: 'shoping', cost: 40},
    {id: 13, name: 'holiday', cost: 400},
    {id: 14, name: 'car servic', cost: 50},
   ],

};

function reducer(state,action){
   console.log(action)
  switch(action.type){
 
    case 'ADD_ITEM' :
      // const newExpenses = state.expenses.push({id:15,name:action.payload.name,cost:action.payload.cost});
      let newState = {...state}
      newState.expenses.push({id:15,name:action.payload.name,cost:parseInt(action.payload.cost)})
      return newState;

      case 'DELETE_ITEM':
        let newState2 = {...state}
        newState2['expenses'] =  newState2.expenses.filter((item)=>{
          if(item.id!==action.payload)
          return item;
         })
        return newState2
    default:
      return state;
  }
}

export const AppContext = createContext()

export const AppProvider = (props)=>{
  const [state,dispatch]= useReducer(reducer,initialState)
  return(
<AppContext.Provider

value = {{
  budget:state.budget,
  expenses: state.expenses,
  dispatch 

}}
>
 {props.children}
</AppContext.Provider>

  )
}