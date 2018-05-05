import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Instructions from './components/Instructions.js';
import Avatars from './components/Avatars.js';
import PlacementTest from './components/PlacementTest.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

class App extends Component {
  state = {
    users: []
    // response: ''
   }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err))
  // }
  //
  // callApi = async () => {
  //   const response = await fetch('./api/users');
  //   const body = await response.json();
  //
  //   if(response.status !== 200) throw Error(body.message)
  //
  //   return body;
  // }

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
        <PlacementTest />
        <Footer /><hr/><hr/>

        <Login /><hr />
        <SignUp />
      </div>
    );
  }
}

export default App;
