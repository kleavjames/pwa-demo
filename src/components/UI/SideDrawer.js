import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Assignment,
  LocationOn,
  More,
} from '../../materialUI';

const ITEM_LIST = [
  { loc: 'Bookings', to: '/bookings' },
  { loc: 'Locations', to: '/locations' },
  { loc: 'More', to: '/settings' }
]

class SideDrawer extends Component {
  
  listIcon = index => {
    switch(index) {
      case 0:
        return <Assignment />;
      case 1:
        return <LocationOn />;
      default:
        return <More />;
    }
  }

  render() {
    const {
      classes,
      sideDrawer,
      toggleSideDrawer
    } = this.props;

    const sideList = (
      <div className={classes.list}>
        <div className={classes.drawerHeader}>
          <h3>Tester Apple</h3>
          <p>appletester@ust.hk</p>
        </div>
        <Divider />
        <List>
          {ITEM_LIST.map((text, index) => (
            <ListItem button component={Link} key={text.loc} to={text.to}>
              <ListItemIcon>{this.listIcon(index)}</ListItemIcon>
              <ListItemText primary={text.loc} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={sideDrawer} onClose={toggleSideDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleSideDrawer}
            onKeyDown={toggleSideDrawer}>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeader: {
    marginLeft: 20
  }
};

export default withStyles(styles)(SideDrawer);
