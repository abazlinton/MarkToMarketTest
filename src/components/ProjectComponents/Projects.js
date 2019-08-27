import './Projects.css'
import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { Container, Table, Col, Row } from 'react-bootstrap'
import { receiveProjects, requestProjects } from '../../redux/actions'
import ProjectTableRow from "./ProjectTableRow"

const Projects = ({ projects, dispatch, history }) => {

  useEffect(() => {
    dispatch(requestProjects())
    fetch("http://api/projects")
      .then(res => res.json())
      .then(projects => dispatch(receiveProjects(projects)))
  }, [dispatch])


  const projectTableRows = projects.map(project => 
    <ProjectTableRow 
      name={project.name}
      description={project.description}
      key={project.id}
      history={history}
      id={project.id}
    />
  )

  return (
    <Container className="projects-table">
      <Row>
        <Col xs={12} sm={12} md={11} lg={11} xl={11}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company Number</th>
              </tr>
            </thead>
            <tbody>{projectTableRows}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(
  mapStateToProps
)(Projects)


