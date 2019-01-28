import React, { Component } from 'react';
import {
  withStyles,
  Paper,
  Tabs,
  Tab
} from '../materialUI';
import PastBooking from './PastBooking';
import CurrentBooking from './CurrentBooking';

class BookingList extends Component {
  state = {
    tab: 0
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper square className={classes.root}>
          <Tabs
            value={this.state.tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(value, index) => this.setState({ tab: index })}
            className={classes.tabRoot}>
            <Tab label="Current" className={classes.tabs} />
            <Tab label="Past" className={classes.tabs} />
          </Tabs>
        </Paper>
        {this.state.tab === 0 && <CurrentBooking />}
        {this.state.tab === 1 && <PastBooking />}
      </div>
    );
  }
}

const styles = {
  container: {
    flexGrow: 1
  },
  root: {
    position: 'relative',
    zIndex: 100
  },
  tabRoot: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  tabs: {
    flexGrow: 1,
    margin: 'auto',
  }
}

export default withStyles(styles)(BookingList);