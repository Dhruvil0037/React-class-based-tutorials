import React , { Component } from 'react';

export default class PocketTaxController extends Component {
  constructor(props) {
    super(props);
    this.aboutUsRef = React.createRef();
    this.testimonialsRef = React.createRef();
  }

  scrollToSection = (section) => {
    switch (section) {
      case 'about':
        this.aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testimonial':
        this.testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}