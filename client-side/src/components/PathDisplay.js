import React, { Component } from 'react';

class PathDisplay extends Component {

  render(){
    return(
      <div id="path-display">
        <section className= "paths" id="social">SOCIAL</section>
        <section className= "paths" id="financial">FINANCIAL</section>
        <section className= "paths" id="personal">PERSONAL</section>
        <section className= "paths" id="epic">PROJECT EPIC</section>
      </div>
    )
  }
}


export default PathDisplay;
