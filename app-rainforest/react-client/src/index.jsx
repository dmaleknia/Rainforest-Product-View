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

    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.getBlogs();
  }

  getBlogs() {
    axios.get('http://127.0.0.1:3000/api/blogs')
      .then((response) => {
        this.setState({
          blogs: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeView(option) {
    if (option === 'feed') {
      this.setState({
        view: 'feed'
      });
    } else if (option === 'admin') {
      this.setState({
        view: 'admin'
      });
    } else if (option === 'create') {
      this.setState({
        view: 'create'
      });
    } else {
      this.setState({
        view: this.state.blogs[option]
      });
    }
  }

  renderView() {
    const { view } = this.state;

    if (view === 'feed') {
      return <Feed blogs={this.state.blogs} handleClick={(e) => this.changeView(e)} />
    } else if (view === 'admin') {
      return <Admin blogs={this.state.blogs} />
    } else if (view === 'create') {
      return <Create />
    } else {
      return <Post blog={this.state.view} />
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