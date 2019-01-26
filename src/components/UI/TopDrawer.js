import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  withStyles
} from '../../materialUI';

const TopDrawer = props => {
  const { classes, toggleSideDrawer, appBarTitle } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={toggleSideDrawer}
            aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
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

export default withStyles(styles)(TopDrawer);