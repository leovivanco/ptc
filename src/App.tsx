import React, { useEffect } from 'react'
import { selectUser, login, logout } from 'features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { auth } from './firebaseConfig'
import { Login, Movies } from 'components'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log({ authUser })
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
    })
  }, [dispatch])
  return (
    <div className="App">
      {!user ? <Login /> : 'Logout'} <Movies />
    </div>
  )
}

export default App
