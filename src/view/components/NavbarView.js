import React from 'react';
import { Box, Button } from '@material-ui/core';
import NavbarController from '../../controller/NavbarController';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    backgroundColor: '#F5F5DC',
    color: '#2E7D32',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      padding: theme.spacing(1),
    },
    width: '100%',
  },
  nav: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
  },
  homeButtonBox: {
    display: 'block',
  },
  homeButton: {
    backgroundColor: 'transparent',
    color: '#2E7D32', 
    fontWeight: 700,
  },
  navButtonBox: {
    display: 'block',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: 'transparent',
    color: '#2E7D32', 
    fontWeight: 700,
  },
  loginBox: {
    display: 'block',
  },
  loginButton: {
    backgroundColor: '#2E7D32', 
    color: '#F5F5DC', 
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#4F7942',
    },
  },
});

class NavbarView extends NavbarController {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Box className={classes.nav}>
          <Box className={classes.homeButtonBox}>
            <Button className={classes.homeButton} onClick={() => this.handleClick('home')}>
              Pocket Tax
            </Button>
          </Box>
          <Box className={classes.navButtonBox}>
            <Button className={classes.navButton} onClick={() => this.handleClick('about')}>
              About us
            </Button>
            <Button className={classes.navButton} onClick={() => this.handleClick('testimonial')}>
              Testimonials
            </Button>
            <Button className={classes.navButton} onClick={() => this.handleClick('knowledge')}>
              Knowledge
            </Button>
            <Button className={classes.navButton} onClick={() => this.handleClick('inquiry')}>
              Make an inquiry
            </Button>
          </Box>
          <Box className={classes.loginBox}>
            <Button
              variant="contained"
              className={classes.loginButton}
              onClick={() => this.handleClick('login')}
            >
              Login
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(NavbarView);