import React from 'react';
import './App.css';
import CompanyTable from './CompanyTable';
import Company from './Company';
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import mockFetches from './mockFetches'
import NewProject from './NewProject'

mockFetches()

function App() {
  return (
    <div className="App">
      <Navbar expand="sm" variant="dark" bg="dark" fixed="top">
        <Nav
          activeKey="index"
        >
          <Navbar.Brand href="/" className="bg-primary text-white px-3">
            M2M
            </Navbar.Brand>
          <Nav.Item>
            <LinkContainer to="/companies" exact={true} eventKey="companies-index">

              <Nav.Link>Companies</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects" exact={true} eventKey="projects-index">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects/new" exact={true} eventKey="projects-new">
              <Nav.Link>New Project</Nav.Link>
            </LinkContainer>
          </Nav.Item>
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
        <Route path="/projects/new" component={NewProject} />
      </Switch>
    </div>
  );
}

export default App;
