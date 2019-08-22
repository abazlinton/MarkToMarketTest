import React, { Fragment } from 'react'

const CompanyListItem = ({ name, number }) => {

  let numberRowContent = <Fragment>{number}</Fragment>

  if (!number.includes('AB')){
    numberRowContent = <a href={`https://beta.companieshouse.gov.uk/company/${number}`}>{number}</a>
  }

  return (

    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{numberRowContent}</td>
      </tr>
    </Fragment>
  )
}

export default CompanyListItem