import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver(event) {
    this.props.setDisplay(this.props.image);
    this.props.view();
  }

  render() {
    return (
      <span onMouseOver={this.mouseOver}>
      {console.log(this.props)}
        <img className='Photo' src={this.props.image} width="45" height="45"></img>
      </span>
    );
  }
}

export default Photo;