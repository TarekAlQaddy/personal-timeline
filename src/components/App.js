import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="begin-pulp">
          <div className="ball b-1"></div>
          <div className="ball b-2"></div>
          <div className="ball b-3"></div>
        </div>
        <div id="main-column"></div>
      </div>
    );
  }
}

export default App;
