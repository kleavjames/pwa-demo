import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Paper,
  List,
  ListItem,
  Divider,
  Typography,
  Icon,
  KeyboardArrowRight
} from '../materialUI'

const CURRENT_BOOKING = [
  { id: 1, date: 'Jun 13, 2019 (Thu)', area: 'Main Campus', room: 'Room 50', time: '13:00 - 13:30' },
  { id: 2, date: 'Aug 4, 2019 (Wed)', area: 'Main Campus', room: 'Room 3', time: '12:45 - 14:05' },
  { id: 3, date: 'Aug 20, 2019 (Mon)', area: 'Function Hall', room: 'Room 1', time: '10:00 - 13:00' },
];


class CurrentBooking extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component='div' className={classes.list}>
          {CURRENT_BOOKING.map(booking => (
            <div key={booking.date}>
              <ListItem
                className={classes.listItem}
                component={Link}
                to={`/bookings/${booking.id}`}>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.date}>
                    <Typography component="h4">
                      {booking.date}
                    </Typography>
                  </Paper>
                  <Divider />
                  <div className={classes.room}>
                    <Paper square elevation={0}>
                      <Typography variant="p" component="p">
                        {booking.area} - {booking.room}
                      </Typography>
                      <Typography component="p">
                        {booking.time}
                      </Typography>
                    </Paper>
                    <Icon
                      className={classes.icon}
                      color="inherit"
                      aria-label="Arrow Right">
                      <KeyboardArrowRight />
                    </Icon>
                  </div>
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
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: '15px 20px',
  },
  icon: {
    marginLeft: 'auto'
  }
}

export default withStyles(styles)(CurrentBooking);