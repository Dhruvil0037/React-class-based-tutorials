import React from 'react';
import { Box, Typography } from '@material-ui/core';
import FooterController from '../../controller/FooterController';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    footer: {
      backgroundColor: '#634832',
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      bottom: 0,
      width: '100%',
      boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
      height: '100px',
      boxSizing: 'border-box',
    },
    footerText: {
      color: '#2E7D32', 
      fontWeight: 700,
    },
  });

class FooterView extends FooterController {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.footer}>
        <Typography variant="body1" className={classes.footerText}>
          PocketTax
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(FooterView);