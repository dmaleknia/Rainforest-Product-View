import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div>
        <h1 id='heading'>Rainforest.com</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);