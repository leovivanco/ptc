import React, { useState } from 'react'
import { auth, provider } from 'firebaseConfig'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar, Button, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import Alert from '@material-ui/lab/Alert'
import { Spinner } from 'components'

const useStyles = makeStyles((theme: Theme) => ({
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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}))
const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const signIn = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)
    auth
      .signInWithPopup(provider)
      .then((e) => setLoading(false))
      .catch(() => setError('Something went wrong, try again.'))
      .finally(() => setLoading(false))
  }
  const classes = useStyles()

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={classes.paper}>
      <Typography variant="h3" noWrap>
        React + Redux + Typscript
      </Typography>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <form className={classes.form} noValidate>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={signIn}
        >
          <MailIcon className={classes.icon} />
          Sign In with Gmail
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </div>
  )
}

export default Login
