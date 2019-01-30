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
} from '../materialUI';
import bookingData from '../data/booking.json';

class CurrentBooking extends Component {
  render() {
    const bookings = bookingData.filter(book => book.active === true);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component='div' className={classes.list}>
          {bookings.map(booking => (
            <div key={booking.date}>
              <ListItem
                className={classes.listItem}
                component={Link}
                to={`/bookings/${booking.id}`}>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.date}>
                    <Typography variant="body1" component="span">
                      {booking.date}
                    </Typography>
                  </Paper>
                  <Divider />
                  <div className={classes.room}>
                    <Paper square elevation={0}>
                      <Typography variant="subtitle1" component="span">
                        {booking.area} - {booking.room}
                      </Typography>
                      <Typography variant="caption" component="span">
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