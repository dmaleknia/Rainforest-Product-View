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
      currentProductID: 27,
      showVideoPlayer: false,
      showZoomView: false,
      currentDisplay: null,
      videoURL: null,
      category: null,
      images: null
    }
    this.setCurrentDisplay = this.setCurrentDisplay.bind(this);
    this.showVideo = this.showVideo.bind(this);
    this.showDisplay = this.showDisplay.bind(this);
    this.showZoomView = this.showZoomView.bind(this);
    this.hideZoomView = this.hideZoomView.bind(this);
  }

  componentDidMount() {
    let currentProductID = this.state.currentProductID;
    axios.get(`/products?id=${currentProductID}`)
      .then((response) => {
        let data = response.data[0];
        let images = [];

        images.push(data.image_1_url);
        images.push(data.image_2_url);
        images.push(data.image_3_url);
        images.push(data.image_4_url);
        images.push(data.image_5_url);
        images.push(data.image_6_url);

        this.setState({
          currentDisplay: data.image_1_url,
          videoURL: data.video_url,
          category: data.category,
          images: images
        });
      })
      .catch((error) => {
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
      <span id='view'>
        <Category text={this.state.category} />
        <div className='ProductView'>
          <div className='left'>
            <Container setDisplay={this.setCurrentDisplay} showVideo={this.showVideo} showDisplay={this.showDisplay} images={this.state.images} />
            <Display displayed={!this.state.showVideoPlayer} image={this.state.currentDisplay} showZoomView={this.showZoomView} hideZoomView={this.hideZoomView} />
            <VideoPlayer displayed={this.state.showVideoPlayer} videoURL={this.state.videoURL} />
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