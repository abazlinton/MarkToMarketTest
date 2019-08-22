import React from 'react'
import CompanyListItem from './CompanyListItem'
import './CompanyList.css'
import Table from 'react-bootstrap/Table';


const CompanyList = ({ companies }) => {

  const companyComponents = companies.map((company) => {
    return <CompanyListItem
      name={company.name}
      number={company.number}
      key={company.name}
    />
  })

  return <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Company Number</th>
      </tr>
    </thead>
    <tbody>
      {companyComponents}
    </tbody>
  </Table>
}

export default CompanyList