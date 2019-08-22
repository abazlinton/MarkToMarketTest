import React from 'react'

const CompanyList = ({companies}) => {
  return <pre>{JSON.stringify(companies, null, 2)}</pre>
}

export default CompanyList