import React from 'react'
import numeral from 'numeral'


const TransactionTableRow = ({ acquirer_name, target_name, value, id }) => {

  return (
    <tr>
      <td>{acquirer_name}</td>
      <td>{target_name}</td>
      <td>{numeral(value).format('($0.00a)')}</td>
    </tr>
  )
}

export default TransactionTableRow