import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container.jsx';
import Display from './components/Display.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ZoomView from './components/ZoomView.jsx';

import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      showVideoPlayer: false,
      showZoomView: true
    }

  }

  render() {
    return (
      <div>
        <h1 id='heading'>Rainforest.com</h1>
        <div id='left'>
          <Container />
          <Display displayed={!this.state.showVideoPlayer} />
          <VideoPlayer displayed={this.state.showVideoPlayer} />
        </div>
        <div id='right'>
          <ZoomView displayed={this.state.showZoomView} /><br />
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);