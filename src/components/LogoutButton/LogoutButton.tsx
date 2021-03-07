import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from 'firebaseConfig'

const LogoutButton = ({ className }) => {
  return (
    <Button
      className={className}
      variant="contained"
      color="secondary"
      onClick={() => auth.signOut()}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
