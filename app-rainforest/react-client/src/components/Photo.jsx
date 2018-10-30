import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  mouseOver(event) {
    console.log(this.props.image);
  }

  render() {
    return (
      <span className='Photo'>
        <img onMouseOver={() => this.mouseOver()} src={this.props.image} width="100" height="100"></img>
      </span>
    );
  }
}

export default Photo;