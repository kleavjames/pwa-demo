import React, { Component } from 'react';
import { withStyles } from './materialUI';
import { Route, Redirect } from 'react-router-dom';

import TopDrawer from './components/UI/TopDrawer';
import BottomDrawer from './components/UI/BottomDrawer';
import SideDrawer from './components/UI/SideDrawer';
import BookingList from './components/BookingList';
import Location from './components/Location';
import MoreSettings from './components/MoreSettings';
import BookingDetail from './components/BookingDetail';

class App extends Component {
  state = {
    drawer: false
  }

  toggleSideDrawer = () => {
    this.setState(prevState => ({ drawer: !prevState.drawer }));
  }

  render() {

    return (
      <div className={this.props.classes.container}>
        <SideDrawer
          sideDrawer={this.state.drawer}
          toggleSideDrawer={this.toggleSideDrawer} />
        <TopDrawer
          toggleSideDrawer={this.toggleSideDrawer} />
        <Route
          path='/bookings'
          exact
          component={BookingList} />
        <Route
          path='/bookings/:id'
          exact
          component={BookingDetail} />
        <Route
          path='/location' 
          exact 
          component={Location} />
        <Route 
          path='/settings'
          exact 
          component={MoreSettings} />
        <Route 
          path='/' 
          exact 
          render={() => <Redirect to='/bookings' />} />
        <BottomDrawer />
      </div>
    );
  }
}

const styles = {
  container : {
    display: 'flex',
    flexDirection: 'column',
    height: 100 + 'vh'
  }
}

export default withStyles(styles)(App);
