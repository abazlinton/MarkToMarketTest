import React from 'react';
import './App.css';
import CompanyTable from './CompanyTable';
import Company from './Company';
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import mockFetches from './mockFetches'
import NewProject from './NewProject'
import Projects from './Projects';
import Project from './Project';
import {connect} from 'react-redux'


const App = function({ dispatch }) {

  return (
    <div className="App">
      <Navbar expand="sm" variant="dark" bg="custom-black" fixed="top">
        <Nav
          activeKey="index"
        >
          <Navbar.Brand href="/" className="brand text-white px-3">M2M</Navbar.Brand>
          <Nav.Item>
            <LinkContainer to="/companies" exact={true} eventKey="companies-index">

              <Nav.Link>COMPANIES</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects" exact={true} eventKey="projects-index">
              <Nav.Link>PROJECTS</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/projects/new" exact={true} eventKey="projects-new">
              <Nav.Link>NEW PROJECT</Nav.Link>
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
        <Route exact path="/projects/" component={Projects} />
        <Route
          path="/projects/:id"
          render={({ match }) => {
            return <Project id={match.params.id} />
          }}
        />
      </Switch>
    </div>
  );
}



export default App
