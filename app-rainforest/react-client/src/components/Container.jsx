import React, { Component } from 'react';
import Photo from './Photo.jsx';
import samplePhotos from './samplePhotos.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: samplePhotos.samplePhotos
    }
  }

  render() {
    return (
      <span className='Container'>
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[0]} />
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[1]} />
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[2]} />
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[3]} />
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[4]} />
        <Photo setDisplay={this.props.setDisplay} image={this.state.photos[5]} />
      <img src={this.props.photo}></img>
      </span>
    );
  }
}

export default Container;