import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Drawer,
  Box
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { DrawerLinks, LogoutButton } from 'components'
import { User } from 'features/userSlice'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
        zIndex: 1341
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    logoutBox: {
      display: 'flex',
      marginLeft: 'auto',
      minWidth: '200px',
      maxWidth: '300px',
      alignItems: 'center'
    },
    logoutButton: {
      marginLeft: theme.spacing(1)
    }
  })
)

interface Props {
  window?: () => Window
  children: any
  user: User
}

const AppLayout = ({ window, children, user }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Movies
          </Typography>
          <Box className={classes.logoutBox}>
            <p>{user && user?.name}</p>
            <LogoutButton className={classes.logoutButton} />
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DrawerLinks />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            <DrawerLinks />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default AppLayout
