import { AppLayout } from 'components'
import { User } from 'features/userSlice'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

type iProps = {
  isAuth: User | null
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
          <AppLayout user={isAuth}>
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
