import React, { Fragment } from 'react'

const CompanyTableRow = ({ name, number }) => {
  
  let numberRowContent = <Fragment>{number}</Fragment>

  if (!number.includes('AB')){
    numberRowContent = <a href={`https://beta.companieshouse.gov.uk/company/${number}`}>{number}</a>
  }

  return (
      <tr>
        <td>{name}</td>
        <td>{numberRowContent}</td>
      </tr>
  )
}

export default CompanyTableRow