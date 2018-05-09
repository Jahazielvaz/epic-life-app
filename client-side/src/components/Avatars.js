import React, { Component } from 'react';

class Avatars extends Component {
  state = {
    charactername: '',
  }

  avatarCustom = (e) => {

  }


  render(){
    var chosenName;
    if(!chosenName === <h2>{this.state.charactername}</h2>){
      chosenName = <h2>'Doggy'</h2>;
    }



    return(
      <form  method="POST" action="/api/images/charactername" className="av-container">
        <input className="name-select" name='charactername' placeholder="Select Character Name" onChange={e => this.setState({ charactername: e.target.value })}/>
        <button id='av-button' onClick={chosenName  = <h2>{this.state.charactername}</h2>}>Save</button>
        <div id="avatar">
          <div id="chosen-image"></div>
          {chosenName}
        </div>
      </form>
    )
  }
}


export default Avatars;
