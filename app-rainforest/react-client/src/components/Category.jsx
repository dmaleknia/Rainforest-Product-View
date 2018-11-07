import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( <span className='Category'>{this.props.text + ' < sub' + this.props.text + ' < sub-sub' + this.props.text}</span> );
  }
}

export default Category;