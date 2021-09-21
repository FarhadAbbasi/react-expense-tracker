import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';
import { TransactionList } from './Components/TransactionList';
import { AccSummery } from './Components/AccSummery';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';

function App() {

  return (
    <div className="App">
      <Header />
        <div className= "container">
          <Balance />
          <AccSummery />
          <TransactionList />
          <AddTransaction />

        </div>
    </div>
  );
}

export default App;
