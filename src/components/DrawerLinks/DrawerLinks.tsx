import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
//import MoviesIcon from '@material-ui/icons/Movie'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar
  })
)

const DrawerLinks = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link} to="/dashboard" button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* <ListItem component={Link} to="/movies" button>
          <ListItemIcon>
            <MoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem> */}
        <ListItem component={Link} to="/settings" button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  )
}

export default DrawerLinks
