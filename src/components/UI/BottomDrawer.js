import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    value: 'Bookings'
  }

  setBottomDrawer = (event, newValue) => {
    this.setState({ value: newValue})
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
          <BottomNavigationAction
            component={Link}
            to='/bookings'
            label="Bookings"
            value='Bookings'
            icon={<Assignment />} />
          <BottomNavigationAction
            component={Link}
            to='/location'
            label="Location"
            value='Location'
            icon={<LocationOn />} />
          <BottomNavigationAction
            component={Link}
            to='/settings'
            label="More"
            value='More'
            icon={<More />} />
        </BottomNavigation>
      </div>
    );
  }
}

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: 100 + '%',
    background: '#F7F8FA',
    border: '1px solid #DEDFE0',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  }
}

export default withStyles(styles)(BottomDrawer);