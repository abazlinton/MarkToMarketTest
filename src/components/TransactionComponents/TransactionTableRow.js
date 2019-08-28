import React from "react"
import numeral from "numeral"
import { Button, Form } from "react-bootstrap"

const TransactionTableRow = ({
  acquirer_name,
  target_name,
  value,
  id,
  buttonText,
  buttonVariant,
  idSelected
}) => {

  function onFormSubmit(event) {
    event.preventDefault()
    const transactionId = event.target.transaction_id.value
    idSelected(transactionId)
  }

  return (
    <tr>
      <td>{acquirer_name}</td>
      <td>{target_name}</td>
      <td align="right">{numeral(value).format("(0.0a)")}</td>
        <td align="center">
          <Form
            onSubmit={onFormSubmit}
          >
            <input id="transaction_id" value={id} type="hidden" />
            <Button variant={buttonVariant} type="submit" size="sm">
              {buttonText}
            </Button>
          </Form>
        </td>
    </tr>
  )
}

export default TransactionTableRow
