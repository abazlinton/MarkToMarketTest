import React, { useEffect, Fragment } from 'react'
import TransactionTable from "./TransactionTable";
import { requestProject, receiveProject } from './redux/actions'
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'

const Project = ({ dispatch, id, project }) => {

  useEffect(() => {
    dispatch(requestProject())
    fetch(`http://api/projects/${id}`)
      .then(res => res.json())
      .then(project => dispatch(receiveProject(project)))
  }, [dispatch, id])


  return (
    <Container className="project">
      <p>{JSON.stringify(project)}</p>
      <TransactionTable />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  project: state.project
})

export default connect(
  mapStateToProps
)(Project)