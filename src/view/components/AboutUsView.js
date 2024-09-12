import React , { Component} from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      padding: theme.spacing(1),
      boxSizing: 'border-box',
    }, 
    introdiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      backgroundColor: '#F5F5DC',
      width: '100%',
      height: '450px',
      boxSizing: 'border-box',
    },
    innerDiv: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
      color: '#2E7D32',
      boxSizing: 'border-box',
    },
    header: {
      color: '#2E7D32', 
    },
    textSecondary: {
      color: '#4F7942', 
    },
  });

class AboutUsView extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>    
        <Box className="body">
          <Box className={classes.introdiv}>
            <Box className={classes.innerDiv}>
              <Typography variant="h4" align="center" className={classes.header}>
                About Us
              </Typography>
              <Typography variant="body1" align="center" className={classes.textSecondary}>
                Welcome to PocketTax! We are dedicated to providing reliable and secure tax filing services. Our team of experts is here to ensure that your tax filings are accurate and on time. Stay informed and in control of your finances with our easy-to-use platform.
              </Typography>            
            </Box>
          </Box>
        </Box>        
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsView);