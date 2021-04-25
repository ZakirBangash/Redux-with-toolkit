import React from 'react';
import { Header } from './Header'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'

import { Transaction } from './Transaction';
import './App.css';
import './App.css';

function App() {
  return (
    <div className="container">
    <Header />
    <Balance />
    <div className="expensein"> 
      <IncomeExpense />
    </div>
    <TransactionList />
    <div className="trans">
      <Transaction />
    </div>
  </div>
  );
}

export default App;
