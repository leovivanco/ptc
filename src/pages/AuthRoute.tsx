import { AppLayout } from 'components'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <AppLayout>
            <Component />
          </AppLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }}
    />
  )
}

export default AuthRoute
