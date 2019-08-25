import React from 'react'

const TransactionTableRow = ({ acquirer_name, target_name, value, id }) => {

  return (
    <tr>
      <td>{acquirer_name}</td>
      <td>{target_name}</td>
      <td>{value}</td>
    </tr>
  )
}

export default TransactionTableRow