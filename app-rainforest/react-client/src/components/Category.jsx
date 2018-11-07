import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  display() {
    if (this.props.text !== null) {
      return (<span className='Category'>{this.props.text + ' < sub' + this.props.text + ' < sub-sub' + this.props.text}</span>);
    } else {
      return (<span></span>);
    }
  }

  render() {
    return(
      <span>{this.display()}</span>
    );
  }
}

export default Category;