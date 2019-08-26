import React from 'react';
import './App.css';
import CompanyTable from './CompanyTable';
import Company from './Company';
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NewProject from './NewProject'
import Projects from './Projects';
import Project from './Project';


const App = function() {

  return (
    <div className="App">
      <Navbar expand="sm" variant="dark" bg="custom-black" fixed="top">
        <Nav
          activeKey="index"
        >
          <LinkContainer to="/" exact={true}>
            <Navbar.Brand className="brand text-white px-3">M2M</Navbar.Brand>
          </LinkContainer>
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
        <Route exxact path="/projects/new" component={NewProject} />
        <Route 
          exact path="/projects" 
          render={({history}) => {
            return <Projects 
              history={history}
            />
          }} />
        <Route
          exact path="/projects/:id"
          render={({ match }) => {
            return <Project 
              id={match.params.id} 
            />
          }}
        />
      </Switch>
    </div>
  );
}



export default App
