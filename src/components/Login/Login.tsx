import React from 'react'
import { auth, provider } from 'firebaseConfig'

const Login = () => {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <form action="">
        <button onClick={signIn}>Sign in</button>
      </form>
    </div>
  )
}

export default Login
