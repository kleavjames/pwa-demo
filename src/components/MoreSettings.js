import React, { Component } from 'react';
import {
  withStyles,
  Paper,
  List,
  ListItem,
  Divider,
  Typography
} from '../materialUI';

import CustomModal from './UI/CustomModal';

const MORE_ITEMS = [
  'Terms & Conditions',
  'Feedback'
];


class MoreSettings extends Component {
  state = {
    show: false
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <CustomModal
          show={this.state.show}
          exit={() => this.setState({ show: false })}>
          <Paper
            elevation={0}
            className={classes.logoutText}>
            <Typography component="span">
              Test Modal Dialog
            </Typography>
          </Paper>
        </CustomModal>

        <div className={classes.root}>
          <List component='div' className={classes.list}>
            {MORE_ITEMS.map(item => (
              <div key={item}>
                <ListItem className={classes.listItem}>
                  <div className={classes.detail}>
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
          <Paper
            component='a'
            square
            elevation={0}
            className={classes.logout}
            onClick={() => this.setState({ show: true })}>
            <Typography component="span">
              Logout
            </Typography>
          </Paper>
          <Divider />
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    top: 55
  },
  detail: {
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
    padding: '30px 20px',
  },
  logout: {
    display: 'flex',
    padding: '30px 20px',
  },
  logoutText: {
    padding: '20px',
    textAlign: 'center'
  }
}

export default withStyles(styles)(MoreSettings);

