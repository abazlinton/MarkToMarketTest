import React from 'react';
import './App.css';
import CompanyTable from './CompanyTable';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap'
import fetchMock from 'fetch-mock'
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'

fetchMock.mock('http://api/companies', transactionsHelper.getSortedCompanies(transactions));

function App() {
  return (
    <div className="App">
          <Navbar expand="sm" variant="dark" bg="dark" fixed="top">
            <Navbar.Brand href="#">M2M</Navbar.Brand>
            <Nav
              activeKey="/"
            >
              <Nav.Item>
                <Nav.Link href="/">Companies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
      <Container className="company-table">
        <Row>
          <Col xs={12} sm={12} md={11} lg={11} xl={11}>
            <CompanyTable/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
