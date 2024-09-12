import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button } from '@material-ui/core';
import TestimonialsController from '../../controller/TestimonialsController';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    container: {
      padding: theme.spacing(4),
      backgroundColor: '#F5F5DC',
      position: 'relative',
      overflow: 'hidden',
      color: '#2E7D32',
    },
    carousel: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      width: '300%',
    },
    card: {
      maxWidth: 345,
      margin: theme.spacing(2),
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      flex: '0 0 33.3333%',
      backgroundColor: '#F5F5',
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginBottom: theme.spacing(2),
    },
    testimonialText: {
      fontStyle: 'italic',
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    prevButton: {
      left: 0,
    },
    nextButton: {
      right: 0,
    },
  });

class TestimonialsView extends TestimonialsController {
  render() {
    const { classes } = this.props;
    const { currentIndex } = this.state;
    const testimonials = [1, 2, 3, 4, 5, 6];

    return (
      <Box className={classes.container}>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Clients Say
        </Typography>
        <Box
          className={classes.carousel}
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial} className={classes.card}>
              <CardContent>
                <Avatar
                  className={classes.avatar}
                  src={`https://randomuser.me/api/portraits/men/${testimonial}.jpg`}
                />
                <Typography variant="body1" className={classes.testimonialText}>
                  "This is a dummy testimonial. The service provided was exceptional and exceeded all expectations. Highly recommended!"
                </Typography>
                <Typography variant="body2" color="textSecondary" align="right">
                  - Client {testimonial}
                </Typography>
              </CardContent>
            </Card>
          ))}
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial + 10} className={classes.card}>
              <CardContent>
                <Avatar
                  className={classes.avatar}
                  src={`https://randomuser.me/api/portraits/men/${testimonial}.jpg`}
                />
                <Typography variant="body1" className={classes.testimonialText}>
                  "This is a dummy testimonial. The service provided was exceptional and exceeded all expectations. Highly recommended!"
                </Typography>
                <Typography variant="body2" color="textSecondary" align="right">
                  - Client {testimonial}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Button
          className={`${classes.navButton} ${classes.prevButton}`}
          onClick={this.handlePrev}
        >
          &lt;
        </Button>
        <Button
          className={`${classes.navButton} ${classes.nextButton}`}
          onClick={this.handleNext}
        >
          &gt;
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(TestimonialsView);