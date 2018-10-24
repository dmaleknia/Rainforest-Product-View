import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'feed',
      blogs: []
    }

  }


  render() {
    return (
      <div>
        <span>Hello from app!</span>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);