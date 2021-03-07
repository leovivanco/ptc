import React, { useEffect, useState } from 'react'
import { login, logout, selectUser } from 'features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { auth } from './firebaseConfig'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthRoute from 'pages/AuthRoute'
import { LoginPage, DashboardPage, SettingsPage, MoviesPage } from 'pages'
import { Spinner } from 'components'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            name: authUser.displayName,
            photo: authUser.photoURL
          })
        )
      } else {
        dispatch(logout())
      }
      setLoading(false)
    })
  }, [dispatch])
  if (loading) {
    return <Spinner />
  }
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/login"
          component={() => <LoginPage isAuth={!!user} />}
        />
        <Route exact path="/" component={() => <LoginPage isAuth={!!user} />} />
        <AuthRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          isAuth={!!user}
        />
        <AuthRoute
          exact
          path="/movies"
          component={MoviesPage}
          isAuth={!!user}
        />
        <AuthRoute
          exact
          path="/settings"
          component={SettingsPage}
          isAuth={!!user}
        />
      </Router>
    </div>
  )
}

export default App
