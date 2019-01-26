import React, { Component } from 'react';
import {
  withStyles,
  Paper,
  List,
  ListItem,
  Divider,
  Typography
} from '../materialUI'

const PAST_BOOKINGS = [
  { date: 'Aug 4, 2017 (Fri)', area: 'Main Campus', room: 'Room 1', time: '13:00 - 13:30' },
  { date: 'Sept 16, 2017 (Mon)', area: 'Main Campus', room: 'Room 3', time: '15:00 - 16:00' },
  { date: 'Dec 1, 2017 (Sat)', area: 'Dormitory', room: 'Room 5', time: '08:00 - 09:30' },
];


class PastBooking extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component='div' className={classes.list}>
          {PAST_BOOKINGS.map(booking => (
            <div key={booking.date}>
              <ListItem className={classes.listItem}>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.date}>
                    <Typography component="h4">
                      {booking.date}
                    </Typography>
                  </Paper>
                  <Divider />
                  <Paper square elevation={0} className={classes.room}>
                    <Typography variant="h5" component="h3">
                      {booking.area} - {booking.room}
                    </Typography>
                    <Typography component="p">
                      {booking.time}
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
  date: {
    flexGrow: 1,
    padding: '10px 20px',
    background: '#f1f3f4',
  },
  room: {
    flexGrow: 1,
    padding: '10px 20px',
  }
}

export default withStyles(styles)(PastBooking);