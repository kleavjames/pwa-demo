import React, { Component } from 'react';
import {
  withStyles,
  Typography
} from '../materialUI'


class Location extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h6" color="inherit">
          Locations
        </Typography>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }
}

export default withStyles(styles)(Location);