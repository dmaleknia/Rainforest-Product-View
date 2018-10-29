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
        <span className='ZoomView'>
          ZoomView
          <iframe width='420' height='315' src={this.props.image}></iframe>
        </span>
      );
    } else {
      return (
        <span>Hiding zoom view</span>
      );
    }
  }
}

export default ZoomView;