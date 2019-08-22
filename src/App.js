import React from 'react';
import './App.css';
import CompanyList from './CompanyList';
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'

function App() {
  return (
    <div className="App">
      <CompanyList
        companies={transactionsHelper.getSortedCompanies(transactions)}
      />
    </div>
  );
}

export default App;
