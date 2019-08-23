import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CompanyTableRow = ({ name, number, id }) => {

  let numberRowContent = <Fragment>{number}</Fragment>

  if (!number.includes('AB')) {
    numberRowContent = <a href={`https://beta.companieshouse.gov.uk/company/${number}`}>{number}</a>
  }
  return (
    <tr>
      <td>
        <Link to={`/companies/${id}`}>{name}</Link></td>
      <td>{numberRowContent}</td>
    </tr>
  )
}

export default CompanyTableRow