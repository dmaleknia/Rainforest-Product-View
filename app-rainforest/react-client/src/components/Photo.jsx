import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <span className='Photo'>
        Photo
        <img src={this.props.image}></img>
      </span>
    );
  }
}

export default Photo;