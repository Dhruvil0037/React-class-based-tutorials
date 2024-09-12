import React from 'react';
import { Box, Typography } from '@material-ui/core';
import NavbarView from '../components/NavbarView';
import FooterView from '../components/FooterView';
import AboutUsView from '../components/AboutUsView';
import TestimonialsView from '../components/TestimonialsView';
import PocketTaxController from '../../controller/PocketTaxController';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
    root: {
      padding: theme.spacing(1),
      overflow: 'hidden',
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
class PocketTaxView extends PocketTaxController {
  render() {
    const { classes } = this.props;

    return (
      <div>        
        <NavbarView onButtonClick={this.scrollToSection} />
        <Box className="body">
          <Box className={classes.introdiv}>
            <Box className={classes.innerDiv}>
              <Typography variant="h4" align="center" className={classes.header}>
                Your trusted tax filing partner
              </Typography>
              <Typography variant="body1" align="center" className={classes.textSecondary}>
                File your taxes with confidence with our secure and reliable online filing services. Our trusted tax filing partner ensures your taxes are filed accurately and on time.
              </Typography>            
            </Box>
          </Box>
          <Box className={classes.introdiv}>
            <Box className={classes.innerDiv}>
              <Typography variant="h4" align="center" className={classes.header}>
                Stay on top of your finances
              </Typography>
              <Typography variant="body1" align="center" className={classes.textSecondary}>
                Stay on top of your spendings, investments, and performance with ease, and make informed decisions for your financial future.
              </Typography>        
            </Box>
          </Box>
        </Box>
        <div ref={this.aboutUsRef}>
          <AboutUsView />
        </div>
        <div ref={this.testimonialsRef}>
          <TestimonialsView />
        </div>
        <FooterView />
      </div>
    );
  }
}

export default withStyles(styles)(PocketTaxView);