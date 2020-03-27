import React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../../assets/logo.png";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from "clsx";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    borderRadius: '0px 0px',
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    height: '9vh',
  },
  gridContainer:{
    height: '100%',
  },
  toolbar: {
    padding: '0px 0px',
    margin: '0px 0px',
  },
  icon: {
    color: lighten(theme.palette.common.black, 0.6),
    fontSize: '1.4em',
  }
}));

export default function MainAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.appBar}>

          <Grid container className={classes.gridContainer} justify="space-between" alignItems="center">
            <Grid item>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img src={Logo} alt="logo desis" />
              </IconButton>
            </Grid>
            <Grid item >
              <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                <AccountCircleIcon className={classes.icon}/>
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                <SettingsIcon className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
      </AppBar>
  );
}