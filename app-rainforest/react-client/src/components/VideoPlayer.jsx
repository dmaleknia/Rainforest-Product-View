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
          <iframe width='420' height='315' src="https://www.youtube.com/embed/BoDQEuP8Igo"></iframe>
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