import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addProject, addedProject } from './redux/actions'
import './NewProject.css'

const NewProject = ({ lastAddedProjectId, dispatch, shouldRedirect }) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const project = { name, description }
    dispatch(addProject(project))
  }

  if (shouldRedirect) {
    dispatch(addedProject())
    return <Redirect to={`/projects/${lastAddedProjectId}`} />
  } 

  return (
    <Container className="new-project">
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Project name:</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Project Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button className="brand" variant="primary" type="submit" >
          Create Project
      </Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return { 
    shouldRedirect: state.shouldRedirect,
    lastAddedProjectId: state.lastAddedProjectId
  }
}

export default connect(
  mapStateToProps
)(NewProject)