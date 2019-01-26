import React, { Component } from 'react';
import { withStyles } from './materialUI';

import TopDrawer from './components/UI/TopDrawer';
import BottomDrawer from './components/UI/BottomDrawer';
import SideDrawer from './components/UI/SideDrawer';
import SecondaryTab from './components/UI/SecondaryTab';

class App extends Component {
  state = {
    drawer: false,
    appBarTitle: 'Bookings'
  }

  toggleSideDrawer = () => {
    this.setState(prevState => ({ drawer: !prevState.drawer }));
  }

  setAppbarTitle = title => {
    this.setState({ appBarTitle: title })
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <SideDrawer
          sideDrawer={this.state.drawer}
          toggleSideDrawer={this.toggleSideDrawer} />
        <TopDrawer
          appBarTitle={this.state.appBarTitle}
          toggleSideDrawer={this.toggleSideDrawer} />
        <SecondaryTab />
        <BottomDrawer
          setAppbarTitle={(title) => this.setAppbarTitle(title)} />
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
