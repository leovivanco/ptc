import React from 'react'
import { selectUser } from 'features/userSlice'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      display: 'flex',
      flexFlow: 'row-reverse',
      marginTop: theme.spacing(1)
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 151
    }
  })
)

const Settings = () => {
  const user = useSelector(selectUser)
  const classes = useStyles()

  return (
    <>
      <Typography component="h4" variant="h4" align="left">
        User Info:
      </Typography>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.email}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={user.photo}
          title={user.name}
        />
      </Card>
    </>
  )
}

export default Settings
