import { AppLayout } from 'components'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

type iProps = {
  isAuth: boolean
  component: Function
  exact?: boolean
  path?: string
}

const AuthRoute = ({ isAuth, component: Component, ...rest }: iProps) => {
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
