import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining'
import SpenetSoFar from './components/SpentSoFar';
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './components/Context/AppContext';
function App() {
  return (
    <AppProvider>
    <div className="container">
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
      <div className='col mt-3' ><Budget/></div>
      <div className='col mt-3'>  <Remaining/></div>
    <div className='col mt-3'> <SpenetSoFar/>
    </div>
    </div>
    <div>
    <ExpenseList/>
    </div>
    <div className='mt-3'>
      <AddExpenseForm/>
    </div>
    </div>
    </AppProvider>
  );
}

export default App;
