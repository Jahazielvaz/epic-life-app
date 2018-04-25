import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Instructions from './components/Instructions.js';
import Avatars from './components/Avatars.js';
import PlacementTest from './components/PlacementTest.js';

class App extends Component {
  state = { users: [] }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header /><br/>
        <Instructions /><hr/>
        <div id="avs">
          <h2 id="char-sel">Select Your Character</h2>
          <Avatars className= "avs" />
          <Avatars className= "avs"/>
          <Avatars className= "avs"/>
        </div><hr/>
        <PlacementTest /><hr/><hr/>
      </div>
    );
  }
}

export default App;
