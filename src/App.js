import React from 'react';
import './App.css';
import CompanyTable from './CompanyTable';
import Company from './Company';
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from "react-router-dom";
import fetchMock from 'fetch-mock'
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'
import { LinkContainer } from "react-router-bootstrap";

fetchMock
  .get('http://api/companies', transactionsHelper.getSortedCompanies(transactions))
  .get('express:/companies/:id', (url) => {
    const id = url.match(/\d+/)[0] 
    return transactionsHelper.getCompanyById(transactions, id)
  })

function App() {
  return (
    <div className="App">
      <Navbar expand="sm" variant="dark" bg="dark" fixed="top">
        <LinkContainer to="/">
          <Navbar.Brand href="/">
            M2M
          </Navbar.Brand>
        </LinkContainer>
        <Nav
          activeKey="/"
        >
          <LinkContainer to="/companies">
            <Nav.Item>
              <Nav.Link href="/companies">Companies</Nav.Link>
            </Nav.Item>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Item>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/companies" component={CompanyTable} />
        <Route
          path="/companies/:id"
          render={({ match }) => {
            return <Company id={match.params.id} />
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
