import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    if (this.props.displayed) {
      return (
        <span className = 'VideoPlayer'>
          <iframe width='420' height='315' src={this.props.videoURL}></iframe>
          <div id='spacer' />
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