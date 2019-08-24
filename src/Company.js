import React, { useEffect } from 'react'
import './Company.css'
import { Container, Card, CardDeck } from 'react-bootstrap'
import { 
  requestCompany, 
  receiveCompany, 
  requestCompanyAcquistions, 
  receiveCompanyAcquistions,
  requestCompanyTargets,
  receiveCompanyTargets
} from './redux/actions'
import { connect } from 'react-redux'
import numeral from 'numeral'
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'

const Company = ({ id, dispatch, company, isFetching }) => {

  useEffect(() => {
    dispatch(requestCompany(id))
    fetch(`http://api/companies/${id}`)
      .then(res => res.json())
      .then(company => dispatch(receiveCompany(company)))
    dispatch(requestCompanyAcquistions(id))
    fetch(`http://api/companies/${id}/transactions?isAcquirer=true`)
      .then(res => res.json())
      .then(acquistions => dispatch(receiveCompanyAcquistions(acquistions)))
    dispatch(requestCompanyTargets(id))
    fetch(`http://api/companies/${id}/transactions?isAcquirer=false`)
      .then(res => res.json())
      .then(targets => dispatch(receiveCompanyTargets(targets)))
  }, [dispatch, id])

  if (isFetching) return null
  // avoid brief view of previous Company
  if (company.id !== Number(id)) return null

  const linkToCompaniesHouse = !company.number.includes('AB')
    ? <Card.Link href={`https://beta.companieshouse.gov.uk/company/${company.number}`}>
      View on Companies House
      </Card.Link>
    : null

  const acquistionCards = company.acquistions
    .map(transaction => {
      // all other fields for key might not be unique
      return <Card key={transaction.value}>
        <Card.Body>
          <Card.Title>{transaction.target_name}</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">{transaction.target_id}</Card.Subtitle>
          <Card.Text style={{}}>
            {numeral(transaction.value).format('($ 0 a)')}
          </Card.Text>
        </Card.Body>
      </Card>
    })

  const targetCards = company.targets
    .map(transaction => {
      // all other fields for key might not be unique
      return <Card key={transaction.value}>
        <Card.Body>
          <Card.Title>{transaction.acquirer_name}</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">{transaction.acquirer_id}</Card.Subtitle>
          <Card.Text style={{}}>
            {numeral(transaction.value).format('($ 0 a)')}
          </Card.Text>
        </Card.Body>
      </Card>
    })

  return <Container className="company">
    <Card style={{ width: '80vw', marginBottom: '3rem' }}>
      <Card.Body>
        <Card.Title as="h2">{company.name || ""}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company.number || ""}</Card.Subtitle>
        {linkToCompaniesHouse}
      </Card.Body>
    </Card>
    <h4 className="mb-5">Transactions as acquirer</h4>
    <CardDeck className="mb-5">
      {acquistionCards}
    </CardDeck>
    <h4 className="mb-5">Transactions as target</h4>
    <CardDeck>
      {targetCards}
    </CardDeck>
  </Container>
}

const mapStateToProps = (state) => ({
  company: state.company,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps
)(Company)

