import React, { useEffect } from 'react'
import { login, logout, selectUser } from 'features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { auth } from './firebaseConfig'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthRoute from 'pages/AuthRoute'
import { LoginPage, DashboardPage } from 'pages'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
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
    })
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/login"
          component={() => <LoginPage isAuth={!!user} />}
        />
        <AuthRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          isAuth={user}
        />
      </Router>
    </div>
  )
}

export default App
