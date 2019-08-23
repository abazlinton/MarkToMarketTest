import React, {useEffect} from 'react'
import CompanyTableRow from './CompanyTableRow'
import './CompanyTable.css'
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux'
import { requestCompanies, receiveCompanies } from './redux/actions'

const CompanyTable = ({ companies, dispatch, isFetchingCompanies }) => {

  useEffect(() => {
    dispatch(requestCompanies())
    fetch('http://api/companies')
      .then(res => res.json())
      .then(companies => dispatch(receiveCompanies(companies)))
  }, [dispatch])

  const companyTableRows = companies.map((company) => {
    return <CompanyTableRow
      name={company.name}
      number={company.number}
      key={company.name}
    />
  })

  if (isFetchingCompanies) return <h1>Loading...</h1>

  return <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Company Number</th>
      </tr>
    </thead>
    <tbody>
      {companyTableRows}
    </tbody>
  </Table>
}

const mapStateToProps = state => ({
  companies: state.companies,
  isFetchingCompanies: state.isFetchingCompanies
})

export default connect(
  mapStateToProps
)(CompanyTable)
