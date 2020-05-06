import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import clsx from "clsx";
import Connect from "../../state/store/connect";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Logo from "../../assets/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, lighten } from '@material-ui/core/styles';
import { setThemeAction } from '../../state/actions/theme';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import paletteTypes from '../../utils/palettes';


const useStyles = props => (makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[0],
    height: props.height,
    padding: '0px 2px 0px 2px',
  },
  gridContainer: {
    height: '100%',
  },
  icon: {
    color: lighten(theme.palette.common.black, 0.6),
    fontSize: '1.4em',
  },
  logoButton: {
    height: '100%',
    padding: '0px 0px',
    margin: '0px 0px',
  },
  logo: {
    width: '100%',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    borderRadius: '0px 0px',
    padding: '0px 2px 0px 2px',
    margin: '0px 0px',
  },
  toolbar: {
    padding: '0px 0px',
    margin: '0px 0px',
  },
})));

const MainAppBar = ({ dispatch, height }) => {
  const classes = useStyles({ height })();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const setThemeHandler = (e, theme) => {
    e.stopPropagation();
    handleClose();
    return dispatch(setThemeAction(theme))
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const paletteMenu = () => {
    const keys = Object.keys(paletteTypes);
    return(
      <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {
        keys.map(palette => (
          <MenuItem key={palette} onClick={(e) => setThemeHandler(e, palette)}>{palette}</MenuItem>
        ))
      }
    </Menu>
    )

  }

  return (
    <AppBar position="static" className={classes.appBar}>

      <Grid container className={classes.gridContainer} justify="space-between" alignItems="center">
        <Grid item>
          <IconButton edge="start" className={classes.logoButton} color="inherit" aria-label="menu">
            <img src={Logo} alt="logo desis" className={classes.logo} />
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <AccountCircleIcon className={classes.icon} />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleClick}>
            <SettingsIcon className={classes.icon} />
          </IconButton>
          {paletteMenu()}
        </Grid>
      </Grid>
    </AppBar >
  );
}

MainAppBar.defaultProps = {
  height: '5vh',
}

MainAppBar.propTypes = {
  height: PropTypes.string.isRequired,
}

const mapStateToProps = ({ theme }, props) => {
  return {
    theme,
    ...props
  };
};

export default Connect(mapStateToProps)(MainAppBar);