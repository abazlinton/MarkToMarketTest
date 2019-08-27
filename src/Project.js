import React, { useEffect, useState } from "react"
import TransactionTable from "./TransactionTable"
import { requestProject } from "./redux/actions"
import { connect } from "react-redux"
import { Container, Card, Alert } from "react-bootstrap"
import "./Project.css"

const Project = ({ requestProject, id, project, isFetching, projectNotFound }) => {
  const [showAddTransactionPrompt, setShowAddTransactionPrompt] = useState(true)

  useEffect(() => {
    requestProject(id)
  }, [id, requestProject])

  if (projectNotFound) return (
    <Container className="project">
      <h1>Not Found</h1>
    </Container>
    )


   if (!project.name) return null

  const transactionPrompt = showAddTransactionPrompt ? (
    <Alert
      variant="primary"
      onClose={() => setShowAddTransactionPrompt(false)}
      dismissible
    >
      You can add transactions to this project here:
    </Alert>
  ) : null

  return (
    <Container className="project">
      <Card style={{ width: "80vw", marginBottom: "3rem" }}>
        <Card.Body>
          <Card.Title as="h2">{project.name || ""}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
      </Card>
      <h4 className="mb-5">Transactions in project</h4>
      <TransactionTable 
        filter={transaction => project.transactions.includes(transaction.id)}
      />
      <h4 className="mb-5">Other Transactions</h4>
      {transactionPrompt}
      <TransactionTable 
        filter={transaction => !project.transactions.includes(transaction.id)}
      />      
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  requestProject: (id) => dispatch(requestProject(id))
})

const mapStateToProps = state => ({
  project: state.project,
  isFetching: state.isFetching,
  projectNotFound: state.projectNotFound
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Project)
