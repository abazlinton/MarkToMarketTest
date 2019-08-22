import React from 'react';
import './App.css';
import CompanyList from './CompanyList';
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Navbar.Brand href="#">M2M</Navbar.Brand>
        <Nav
          activeKey="/"
        >
          <Nav.Item>
            <Nav.Link href="/">Companies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <CompanyList
              companies={transactionsHelper.getSortedCompanies(transactions)}
            />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;