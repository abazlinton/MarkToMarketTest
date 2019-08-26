import React, { useEffect } from 'react'
import './CompanyTable.css'
import { Row, Col, Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { requestTransactions, receiveTransactions } from './redux/actions'
import TransactionTableRow from './TransactionTableRow';

const TransactionTable = ({ transactions, dispatch, isFetching }) => {

  useEffect(() => {
    dispatch(requestTransactions())
    fetch('http://api/transactions')
      .then(res => res.json())
      .then(transactions => dispatch(receiveTransactions(transactions)))
  }, [dispatch])

  const transactionTableRows = transactions.map((transaction) => {
    return <TransactionTableRow
      id={transaction.id}
      acquirer_name={transaction.acquirer_name}
      target_name={transaction.target_name}
      value={transaction.value}
      key={transaction.id}
    />
  })

  if (isFetching) return null

  return (
    <Container className="transaction-table">
      <Row>
        <Col xs={12} sm={12} md={11} lg={11} xl={11}>

          <Table striped bordered hover>

            <thead>
              <tr>
                <th>Acquirer Name</th>
                <th>Target Name</th>
                <th>Value (£)</th>
              </tr>
            </thead>
            <tbody>
              {transactionTableRows}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  transactions: state.transactions,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps
)(TransactionTable)
