import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: true
    }
  }
  render() {
    if (this.state.displayed) {
      return (
        <span className = 'VideoPlayer'>
          <iframe width='420' height='315'
            src={this.state.video}>
          </iframe>
        </span>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

export default VideoPlayer;