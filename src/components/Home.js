import React from 'react'
import './Home.css'
import { Alert } from 'react-bootstrap'

export default () =>
  (
    <Alert className="home" variant="primary">
      <Alert.Heading>
        Welcome to Mark to Market
      </Alert.Heading>
      <p>
        Please choose an option from above
      </p>
      <hr />
    </Alert>

  )