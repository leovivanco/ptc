import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from 'firebaseConfig'

const LogoutButton = ({ className }: { className: string }) => {
  return (
    <Button
      size="small"
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
