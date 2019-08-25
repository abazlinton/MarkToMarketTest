import React, { useEffect, Fragment } from 'react'
import TransactionTable from "./TransactionTable";
import { requestProject, receiveProject } from './redux/actions'
import { connect } from 'react-redux';

const Project = ({ dispatch, id }) => {

  useEffect(() => {
    dispatch(requestProject())
    fetch(`http://api/projects/${id}`)
      .then(res => res.json())
      .then(project => dispatch(receiveProject(project)))
  }, [dispatch, id])


  return (
    <Fragment>
      
      <TransactionTable />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps
)(Project)