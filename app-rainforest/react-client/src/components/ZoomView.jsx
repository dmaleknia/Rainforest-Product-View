import React, { Component } from 'react';

class ZoomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false
    }
  }
  render() {
    return (
      <span>
        <iframe src={this.props.currentImage}
      </span>
    );
  }
}

export default ZoomView;