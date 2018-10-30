import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <span className='Photo'>
        <img src={this.props.image} width="100" height="100"></img>
      </span>
    );
  }
}

export default Photo;