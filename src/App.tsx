import React, { useEffect, useState } from 'react'
import { login, logout, selectUser } from 'features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { auth } from './firebaseConfig'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthRoute from 'pages/AuthRoute'
import { LoginPage, DashboardPage, SettingPage, MoviesPage } from 'pages'
import { CircularProgress, Box } from '@material-ui/core'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('object', authUser)
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
    return (
      <Box
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <CircularProgress />
      </Box>
    )
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
          isAuth={user}
        />
        <AuthRoute exact path="/movies" component={MoviesPage} isAuth={user} />
        <AuthRoute
          exact
          path="/settings"
          component={SettingPage}
          isAuth={user}
        />
      </Router>
    </div>
  )
}

export default App
