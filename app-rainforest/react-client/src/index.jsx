import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container.jsx';
import Display from './components/Display.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ZoomView from './components/ZoomView.jsx';
import Category from './components/Category.jsx';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: 91,
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

  componentDidMount() {
    // let currentProductID = document.URL.split('=')[1];
    let currentProductID = this.state.currentProductID;
    axios.get(`/products?id=${currentProductID}`)
      .then(function (response) {
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

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

  renderZoomView() {
    if (this.state.showZoomView) {
      return <div><ZoomView displayed={this.state.showZoomView} /><br /></div>;
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <span>
        <Category text="Cell Phones & Accessories › Cell Phones › Unlocked Cell Phones" />
        <div className='ProductView'>
          <div className='left'>
            <Container setDisplay={this.setCurrentDisplay} showVideo={this.showVideo} showDisplay={this.showDisplay} />
            <Display displayed={!this.state.showVideoPlayer} image={this.state.currentDisplay} showZoomView={this.showZoomView} hideZoomView={this.hideZoomView} />
            <VideoPlayer displayed={this.state.showVideoPlayer} />
          </div>
          <div className='right'>
            {this.renderZoomView()}
          </div>
        </div>
      </span>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);