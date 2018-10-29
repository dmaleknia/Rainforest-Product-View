import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from './components/Container.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      showVideoPlayer: true,
      showZoomView: true
    }

  }


  render() {
    return (
      <div>
        <h1 id='heading'>Rainforest.com</h1>
        <Container />
        <ZoomView displayed={this.state.showZoomView}/>
        <VideoPlayer displayed={this.state.showVideoPlayer}/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);