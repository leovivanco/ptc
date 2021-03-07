import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
//import MoviesIcon from '@material-ui/icons/Movie'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    linkActive: {
      backgroundColor: theme.palette.grey[400],
      span: {
        fontWeight: 'bold'
      }
    }
  })
)

const DrawerLinks = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          component={NavLink}
          to="/dashboard"
          activeClassName={classes.linkActive}
          button
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* <ListItem component={NavLink} to="/movies" button>
          <ListItemIcon>
            <MoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem> */}
        <ListItem
          component={NavLink}
          activeClassName={classes.linkActive}
          to="/settings"
          button
        >
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
