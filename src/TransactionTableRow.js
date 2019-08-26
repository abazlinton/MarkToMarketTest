import React from 'react'
import numeral from 'numeral'
import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'


const TransactionTableRow = ({ acquirer_name, target_name, value, id }) => {

  const [transactionIdToAddToProject, setTransactionIdToAddToProject] = useState(0)

  useEffect(() => {
    if (transactionIdToAddToProject) {
      fetch(`http://api/projects/${id}/transactions`, {
        method: 'post',
        body: {transaction_id: transactionIdToAddToProject}
      })
    }
  },[transactionIdToAddToProject])


  function onFormSubmit(event){
    event.preventDefault()
    const transactionId = event.target.transaction_id.value
    setTransactionIdToAddToProject(transactionId)
  }

  return (
    <tr>
      <td>{acquirer_name}</td>
      <td>{target_name}</td>
      <td align="right">{numeral(value).format('(0.0a)')}</td>
      <td align="center">
        <Form
          onSubmit={onFormSubmit}
          action={`http://api/projects/${id}/transactions`}
          method="post"
        >
          <input id="transaction_id" value={id} type="hidden"/>
          <Button variant="primary" type="submit" size="sm">
          Add to Project
          </Button>
        </Form>
      </td>
    </tr>
  )
}

export default TransactionTableRow