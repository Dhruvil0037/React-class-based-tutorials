import { Component } from 'react';

export default class TestimonialsController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + 3) % 3,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % 3,
    }));
  };
}