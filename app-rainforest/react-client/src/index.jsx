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
      showZoomView: true,
      currentDisplay: null,
    }
    this.setCurrentDisplay = this.setCurrentDisplay.bind(this);
  }

  setCurrentDisplay(url) {
    this.setState({ currentDisplay: url });
  }

  render() {
    return (
      <div className='ProductView'>
        <div className='left'>
          <Container setDisplay={this.setCurrentDisplay} />
          <Display displayed={this.state.showVideoPlayer} image={this.state.currentDisplay} />
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