import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container.jsx';
import Display from './components/Display.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ZoomView from './components/ZoomView.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      showVideoPlayer: true,
      showZoomView: true
    }
  }

  render() {
    return (
      <div className='ProductView'>
        <h1 className='heading'>Rainforest.com</h1>
        <div className='left'>
          <Container />
          <Display displayed={this.state.showVideoPlayer} />
          <VideoPlayer displayed={this.state.showVideoPlayer} />
        </div>
        <div className='right'>
          <ZoomView displayed={this.state.showZoomView} /><br />
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);