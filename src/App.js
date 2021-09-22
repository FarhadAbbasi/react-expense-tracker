import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';
import { TransactionList } from './Components/TransactionList';
import { AccSummery } from './Components/AccSummery';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { GlobalProvider } from './Context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <Header />
        <div className= "container">
          <Balance />
          <AccSummery />
          <TransactionList />
          <AddTransaction />

        </div>
    </GlobalProvider>
  );
}

export default App;
