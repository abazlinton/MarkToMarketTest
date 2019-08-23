import React, { useEffect } from 'react'
import CompanyTableRow from './CompanyTableRow'
import './CompanyTable.css'
import { Row, Col, Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { requestCompanies, receiveCompanies } from './redux/actions'

const CompanyTable = ({ companies, dispatch, isFetching }) => {

  useEffect(() => {
    dispatch(requestCompanies())
    fetch('http://api/companies')
      .then(res => res.json())
      .then(companies => dispatch(receiveCompanies(companies)))
  }, [dispatch])

  const companyTableRows = companies.map((company) => {
    return <CompanyTableRow
      id={company.id}
      name={company.name}
      number={company.number}
      key={company.name}
    />
  })

  if (isFetching) return null

  return (
    <Container className="company-table">
      <Row>
        <Col xs={12} sm={12} md={11} lg={11} xl={11}>

          <Table striped bordered hover>

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
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  companies: state.companies,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps
)(CompanyTable)
