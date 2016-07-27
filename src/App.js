import React, { Component } from 'react';
import Body from './components/Body';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.data.home.siteTitle}</h2>
        </div>
        <Body siteBody={this.props.data.home.siteBody} />
        <p>{this.props.ajaxData.name}</p>
      </div>
    );
  }
}

export default App;
