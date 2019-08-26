import React, { useEffect, useState } from 'react'
import TransactionTable from "./TransactionTable";
import { requestProject, receiveProject } from './redux/actions'
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap'
import './Project.css'

const Project = ({ dispatch, id, project, isFetching }) => {

  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(requestProject())
    fetch(`http://api/projects/${id}`)
      .then(res => {
        if (res.status === 404) throw new Error("404")
        return res.json()
      })
      .then(project => dispatch(receiveProject(project)))
      .catch(error => setError(Number(error.message)))
  }, [dispatch, id])

  if (error === 404) return <Container className="project"><h1>Not Found</h1></Container>
  if (!project.name) return null

  return (
    <Container className="project">
      <Card style={{ width: '80vw', marginBottom: '3rem' }}>
      <Card.Body>
        <Card.Title as="h2">{project.name || ""}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
      <h4 className="mb-5">Transactions in project</h4>
      <h4 className="mb-5">Add transactions</h4>
      <TransactionTable />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  project: state.project,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps
)(Project)