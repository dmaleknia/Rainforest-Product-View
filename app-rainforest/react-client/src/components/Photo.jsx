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
      <span>
        <img className='Photo' onMouseOver={() => this.mouseOver()} src={this.props.image} width="45" height="45"></img>
      </span>
    );
  }
}

export default Photo;