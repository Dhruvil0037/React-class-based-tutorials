import { Component } from 'react';

export default class NavbarController extends Component {
  handleClick = (buttonText) => {
    if (this.props.onButtonClick) {
      this.props.onButtonClick(buttonText);
    }
  };
}