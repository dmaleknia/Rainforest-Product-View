import React, { Component } from 'react';
import Photo from './Photo.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <span className='Container'>Here is the container
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <VideoPlayer />
      </span>
    );
  }
}

export default Container;