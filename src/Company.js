import React, { useEffect } from 'react'
import './Company.css'
import { Container } from 'react-bootstrap'
import { requestCompany, receiveCompany } from './redux/actions'
import { connect } from 'react-redux'

const Company = ({id, dispatch, company}) => {

  useEffect(() => {
    dispatch(requestCompany(id))
    fetch(`http://api/companies/${id}`)
      .then(res => res.json())
      .then(company => dispatch(receiveCompany(company)))
  }, [dispatch, id])

  return <Container className="company">
    {JSON.stringify(company)}
  </Container>
}

const mapStateToProps = (state) => ({
  company: state.company 
})

export default connect(
  mapStateToProps
)(Company)

