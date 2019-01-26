import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles,
  Assignment,
  LocationOn,
  More
} from '../../materialUI';

class BottomDrawer extends Component {
  state = {
    value: 0
  }

  setBottomDrawer = (event, newValue) => {
    this.setState({ value: newValue})

    if (newValue === 0) {
      this.props.setAppbarTitle('Bookings')
    }

    if (newValue === 1) {
      this.props.setAppbarTitle('Locations')
    }

    if (newValue === 2) {
      this.props.setAppbarTitle('More')
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.test}>
        <BottomNavigation
          value={this.state.value}
          onChange={this.setBottomDrawer}
          showLabels
          className={classes.root}>
          <BottomNavigationAction label="Bookings" icon={<Assignment />} />
          <BottomNavigationAction label="Locations" icon={<LocationOn />} />
          <BottomNavigationAction label="More" icon={<More />} />
        </BottomNavigation>
      </div>
    );
  }
}

const styles = {
  root: {
    background: '#F7F8FA',
    border: '1px solid #DEDFE0',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  }
}

export default withStyles(styles)(BottomDrawer);