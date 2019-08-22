import React, { Fragment } from 'react'

const CompanyListItem = ({ name, number }) => {

  let tdInner = <span>{number}</span>

  if (!number.includes('AB')){
    tdInner = <a href={`https://beta.companieshouse.gov.uk/company/${number}`}>{number}</a>
  }

  return (

    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{tdInner}</td>
      </tr>
    </Fragment>
  )
}

export default CompanyListItem