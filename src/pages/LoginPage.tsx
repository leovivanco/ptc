import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Login } from 'components'

const LoginPage = ({ isAuth }) => {
  if (isAuth) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <Login />
    </Container>
  )
}

export default withRouter(LoginPage)
