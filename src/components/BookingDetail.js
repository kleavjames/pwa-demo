import React, { Component } from 'react';
import {
  withStyles,
  Paper,
  List,
  ListItem,
  Divider,
  Typography
} from '../materialUI'

const MORE_ITEMS = [
  'Terms & Conditions',
  'Feedback',
  'Logout'
];


class BookingDetail extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component='div' className={classes.list}>
          {MORE_ITEMS.map(item => (
            <div key={item}>
              <ListItem className={classes.listItem}>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.item}>
                    <Typography component="p">
                      {item}
                    </Typography>
                  </Paper>
                  <Divider />
                </div>
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  list: {
    padding: 0
  },
  listItem: {
    padding: 0
  },
  item: {
    flexGrow: 1,
    padding: '20px 20px',
  }
}

export default withStyles(styles)(BookingDetail);