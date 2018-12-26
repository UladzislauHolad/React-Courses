import React, { Component } from 'react';
import './App.css';
import { buttons } from './services/butonsService';
import Tab from './comonents/Tab';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab buttons={buttons}></Tab>
      </div>
    );
  }
}


export default App;