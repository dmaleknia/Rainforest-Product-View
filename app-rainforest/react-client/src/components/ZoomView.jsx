import React, { Component } from 'react';

class ZoomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    if (this.props.displayed) {
      return (
        <span>
          <img className='ZoomView' width='500' height='400' src={this.props.image}></img>
        </span>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

export default ZoomView;