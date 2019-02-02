import React, { Component } from 'react';
import { withStyles } from './materialUI';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import TopDrawer from './components/UI/TopDrawer';
import SideDrawer from './components/UI/SideDrawer';
import BookingList from './components/BookingList';
import Locations from './components/Locations';
import MoreSettings from './components/MoreSettings';
import BookingDetail from './components/BookingDetail';

const transitionAnimate = {
  enter: 300,
  exit: 150
}

class App extends Component {
  state = {
    drawer: false
  }

  toggleSideDrawer = () => {
    this.setState(prevState => ({
      drawer: !prevState.drawer
    }));
  }

  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.container}>
        <SideDrawer
          sideDrawer={this.state.drawer}
          toggleSideDrawer={this.toggleSideDrawer}
          togglePageSelected={this.togglePageSelected} />
        <TopDrawer
          toggleSideDrawer={this.toggleSideDrawer} />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={transitionAnimate}
            classNames="slide-page">
            <Switch location={location}>
              <Route exact path='/bookings' component={BookingList} />
              <Route exact path='/bookings/:id' component={BookingDetail} />
              <Route exact path='/locations' component={Locations} />
              <Route exact path='/settings' component={MoreSettings} />
              <Route exact path='/' render={() => <Redirect to='/bookings' />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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

export default withRouter(withStyles(styles)(App));