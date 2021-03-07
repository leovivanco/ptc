import React from 'react'
import { auth, provider } from 'firebaseConfig'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles, Avatar, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
const Login = () => {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).then((e) => console.log(e))
  }
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <form className={classes.form} noValidate>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={signIn}
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default Login
