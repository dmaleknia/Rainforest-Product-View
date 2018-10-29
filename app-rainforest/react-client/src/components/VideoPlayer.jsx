import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    if (this.props.displayed) {
      return (
        <span className = 'VideoPlayer'>Video Player
          <iframe width='420' height='315' src={this.props.video}></iframe>
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