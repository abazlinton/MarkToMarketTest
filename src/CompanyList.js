import React, {useEffect} from 'react'
import CompanyListItem from './CompanyListItem'
import './CompanyList.css'
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux'
import { loadCompanies } from './redux/actions'

const CompanyList = ({ companies, dispatch }) => {

  useEffect(() => {
    dispatch(loadCompanies())
  }, [dispatch])

  const companyComponents = companies.map((company) => {
    return <CompanyListItem
      name={company.name}
      number={company.number}
      key={company.name}
    />
  })

  if (companies.length === 0) return null

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

const mapStateToProps = state => ({
  companies: state.companies
})

export default connect(
  mapStateToProps
)(CompanyList)
