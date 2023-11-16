import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import './App.css';
import AddTransaction from './components/AddTransaction';
import  {GlobalProvider}  from '../src/components/context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      < Header />
      <div class="container">
        < Balance />
        < IncomeExpenses />
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
