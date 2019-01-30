import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {
  withStyles,
  Paper,
  Divider,
  Typography,
} from '../materialUI';

const BOOKING_DETAIL = [
  { id: 1, date: 'Jun 13, 2019 (Thu)', area: 'Main Campus', room: 'Room 50', time: '13:00 - 13:30' },
  { id: 2, date: 'Aug 4, 2019 (Wed)', area: 'Main Campus', room: 'Room 3', time: '12:45 - 14:05' },
  { id: 3, date: 'Aug 20, 2019 (Mon)', area: 'Function Hall', room: 'Room 1', time: '10:00 - 13:00' },
  { id: 4, date: 'Aug 4, 2017 (Fri)', area: 'Main Campus', room: 'Room 1', time: '13:00 - 13:30' },
  { id: 5, date: 'Sept 16, 2017 (Mon)', area: 'Main Campus', room: 'Room 3', time: '15:00 - 16:00' },
  { id: 6, date: 'Dec 1, 2017 (Sat)', area: 'Dormitory', room: 'Room 5', time: '08:00 - 09:30' },
];


class BookingDetail extends Component {
  render() {
    const { classes, match } = this.props;
    const selectedBook = BOOKING_DETAIL.find(book => book.id === +match.params.id);

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.item}>
          <Typography component="p">
            Location
          </Typography>
          <Typography variant='subtitle1' component="p" className={classes.detail}>
            {selectedBook.area}
          </Typography>
        </Paper>
        <Divider />
        <Paper square elevation={0} className={classes.item}>
          <Typography component="p">
            Room
          </Typography>
          <Typography variant='subtitle1' component="p" className={classes.detail}>
            {selectedBook.room}
          </Typography>
        </Paper>
        <Divider />
        <Paper square elevation={0} className={classes.item}>
          <Typography component="p">
            Date
          </Typography>
          <Typography variant='subtitle1' component="p" className={classes.detail}>
            {selectedBook.date}
          </Typography>
        </Paper>
        <Divider />
        <Paper square elevation={0} className={classes.item}>
          <Typography component="p">
            Timeslot
          </Typography>
          <Typography variant='subtitle1' component="p" className={classes.detail}>
            {selectedBook.time}
          </Typography>
        </Paper>
        <Divider />

      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    padding: '30px 20px',
  },
  detail: {
    marginLeft: 'auto'
  }
}

export default withRouter(withStyles(styles)(BookingDetail));