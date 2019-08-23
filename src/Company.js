import React, { useEffect } from 'react'
import './Company.css'
import { Container, Card, CardDeck } from 'react-bootstrap'
import { requestCompany, receiveCompany, clearCompany } from './redux/actions'
import { connect } from 'react-redux'

const Company = ({ id, dispatch, company, isFetching }) => {

  useEffect(() => {
    dispatch(requestCompany(id))
    fetch(`http://api/companies/${id}`)
      .then(res => res.json())
      .then(company => dispatch(receiveCompany(company)))
  }, [dispatch, id])

  if (isFetching) return null
  // avoid brief view of previous Company
  if (company.id !== Number(id)) return null

  return <Container className="company">
    <Card style={{ width: '80vw', marginBottom: '3rem' }}>
      <Card.Body>
        <Card.Title as="h3">{company.name || ""}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company.number || ""}</Card.Subtitle>
        <Card.Text>
          Some details about company here
        </Card.Text>
        <Card.Link href={`https://beta.companieshouse.gov.uk/company/${company.number}`}>
          View on Companies House
        </Card.Link>
      </Card.Body>
    </Card>

    <h3 className="related-header">Aquisitions</h3>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>{company.name || ""}</Card.Title>
        <Card.Subtitle style={{color: 'darkgreen'}}>£100</Card.Subtitle>

        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>{company.name || ""}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>{company.name || ""}</Card.Title>
        </Card.Body>
      </Card>
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

