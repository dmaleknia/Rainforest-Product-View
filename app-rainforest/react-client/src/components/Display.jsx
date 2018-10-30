import React, { Component } from 'react';
import Photo from './Photo.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    if (this.props.displayed) {
      return (
        <span className='Display'>
          <img width='420' height='315' src={this.props.image}></img>
        </span>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

export default Display;