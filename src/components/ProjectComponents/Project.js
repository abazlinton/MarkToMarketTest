import React, { useEffect, useState } from "react"
import TransactionTable from "../TransactionComponents/TransactionTable"
import {
  requestProject,
  requestTransactions,
  addTransactionToProject,
  removeTransactionFromProject
} from "../../redux/actions"
import { connect } from "react-redux"
import { Container, Card, Alert } from "react-bootstrap"
import "./Project.css"

const Project = ({
  requestProject,
  requestTransactions,
  addTransactionToProject,
  removeTransactionFromProject,
  id,
  project,
  transactions,
  projectFound
}) => {

  const [showAddTransactionPrompt, setShowAddTransactionPrompt] = useState(true)
  const [transactionIdToAdd, setTransactionIdToAdd] = useState(0)
  const [transactionIdToRemove, setTransactionIdToRemove] = useState(0)

  useEffect(() => {
    requestProject(id)
    requestTransactions()
  }, [id, requestProject, requestTransactions])

  useEffect(() => {
    if (transactionIdToAdd) {
      addTransactionToProject(transactionIdToAdd, id)
    }
  }, [transactionIdToAdd, id, addTransactionToProject])

  useEffect(() => {
    if (transactionIdToRemove) {
      removeTransactionFromProject(transactionIdToRemove, id)
    }
  }, [removeTransactionFromProject, transactionIdToRemove, id])

  function onSubmitTransactionIdToAdd(id) {
    setTransactionIdToAdd(id)
  }

  function onSubmitTransactionIdToRemove(id) {
    setTransactionIdToRemove(id)
  }

  if (!projectFound)
    return (
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
          <Card.Title as="h2">{project.name}</Card.Title>
          <Card.Text>{project.description || ""}</Card.Text>
        </Card.Body>
      </Card>
      <h4 className="mb-5">Transactions in project</h4>
      <TransactionTable
        transactions={transactions}
        filter={transaction => project.transactions.includes(transaction.id)}
        buttonText="Remove"
        buttonVariant="danger"
        idSelected={onSubmitTransactionIdToRemove}
      />
      <h4 className="mb-5">Other Transactions</h4>
      {transactionPrompt}
      <TransactionTable
        transactions={transactions}
        filter={transaction => !project.transactions.includes(transaction.id)}
        buttonText="Add"
        buttonVariant="primary"
        idSelected={onSubmitTransactionIdToAdd}
      />
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  requestProject: id => dispatch(requestProject(id)),
  requestTransactions: () => dispatch(requestTransactions()),
  addTransactionToProject: (transactionIdToAdd, id) =>
    dispatch(addTransactionToProject(transactionIdToAdd, id)),
  removeTransactionFromProject: (transactionIdToRemove, id) =>
    dispatch(removeTransactionFromProject(transactionIdToRemove, id))
})

const mapStateToProps = state => ({
  project: state.project,
  isFetching: state.isFetching,
  projectFound: state.projectFound,
  transactions: state.transactions
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
