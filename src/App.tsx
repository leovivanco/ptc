import React, { useEffect } from 'react'
import { selectUSer, login, logout } from 'features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { auth } from './firebaseConfig'
import { Login } from 'components'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUSer)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log({ authUser })
      if (authUser) {
        dispatch(login({}))
      } else {
        dispatch(logout({}))
      }
    })
  }, [dispatch])
  return <div className="App">{!user ? <Login /> : 'Logout'}</div>
}

export default App
