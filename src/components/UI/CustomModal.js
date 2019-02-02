import React, { Component } from 'react';
import { Paper, Slide, withStyles } from '../../materialUI';
import { CSSTransition } from 'react-transition-group';

class CustomModal extends Component {
  render() {
    const { classes, show, exit, children } = this.props;

    return (
      <>
        <div className={classes.modalSpace}>
          <Slide
            direction="up"
            in={show}
            mountOnEnter
            unmountOnExit>
            <Paper elevation={1}
              className={classes.modal}>
              {children}
            </Paper>
          </Slide>
        </div>
        
        <CSSTransition
          in={show}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="fade">
          <div
            className={classes.modalBg}
            onClick={exit}>
          </div>
        </CSSTransition>
      </>
    );
  }
}

const styles = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    width: '70%',
    height: 120,
    position: 'absolute'
  },
  modalBg: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 10,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.19)',
  },
  modalSpace: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: '50vh',
    zIndex: 15,
    justifyContent: 'center'
  }
}

export default withStyles(styles)(CustomModal);