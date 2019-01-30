import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {
  withStyles,
  Paper,
  Divider,
  Typography,
} from '../materialUI';
import bookingData from '../data/booking.json';

class BookingDetail extends Component {
  render() {
    const { classes, match } = this.props;
    const selectedBook = bookingData.find(book => book.id === +match.params.id);

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