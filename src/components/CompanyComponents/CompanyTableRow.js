import React from 'react'
import { Link } from 'react-router-dom'

const CompanyTableRow = ({ name, number, id }) => {

  return (
    <tr>
      <td>
        <Link to={`/companies/${id}`}>{name}</Link></td>
      <td>{number}</td>
    </tr>
  )
}

export default CompanyTableRow