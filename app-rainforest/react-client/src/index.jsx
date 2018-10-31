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
      showVideoPlayer: false,
      showZoomView: false,
      currentDisplay: null
    }
    this.setCurrentDisplay = this.setCurrentDisplay.bind(this);
    this.showVideo = this.showVideo.bind(this);
    this.showDisplay = this.showDisplay.bind(this);
    this.showZoomView = this.showZoomView.bind(this);
    this.hideZoomView = this.hideZoomView.bind(this);
  }

  setCurrentDisplay(url) {
    this.setState({ currentDisplay: url });
  }

  showVideo() {
    this.setState({ showVideoPlayer: true });
  }

  showDisplay() {
    this.setState({ showVideoPlayer: false });
  }

  showZoomView() {
    this.setState({ showZoomView: true });
  }

  hideZoomView() {
    this.setState({ showZoomView: false });
  }

  render() {
    return (
      <div className='ProductView'>
        <div className='left'>
          <Container setDisplay={this.setCurrentDisplay} showVideo={this.showVideo} showDisplay={this.showDisplay} />
          <Display displayed={!this.state.showVideoPlayer} image={this.state.currentDisplay} showZoomView={this.showZoomView} hideZoomView={this.hideZoomView} />
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