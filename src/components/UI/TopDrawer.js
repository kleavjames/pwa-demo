import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  withStyles,
  MoreVert,
  ArrowBack
} from '../../materialUI';

class TopDrawer extends Component {
  state = {
    setAppbar: false
  }

  render() {
    console.log(this.props);
    const { classes, toggleSideDrawer, location, history } = this.props;
    let appbarTitle = '';
    let renderIcon = (
      <IconButton
        className={classes.menuButton}
        color="inherit"
        onClick={toggleSideDrawer}
        aria-label="Menu">
        <Menu />
      </IconButton>
    )

    if (location.pathname.length >= 11) {
      appbarTitle = 'Booking Detail';
      renderIcon = (
        <IconButton
          className={classes.menuButton}
          color="inherit"
          onClick={history.goBack}
          aria-label="Arrow Back">
          <ArrowBack />
        </IconButton>
      )
    }

    if (location.pathname === '/bookings') {
      appbarTitle = 'Bookings';
    }

    if (location.pathname === '/location') {
      appbarTitle = 'Location';
    }

    if (location.pathname === '/settings') {
      appbarTitle = 'More';
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {renderIcon}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {appbarTitle}
            </Typography>
            { location.pathname.length >= 11 ?
              <IconButton
                color="inherit"
                aria-label="More Vertical">
                <MoreVert />
              </IconButton>
              : null }
          </Toolbar>
        </AppBar>
      </div>
    );

  }
}

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withRouter(withStyles(styles)(TopDrawer));