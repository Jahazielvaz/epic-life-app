import React, { Component } from 'react';

class Avatars extends Component {
  state = {
    avatarName: '',
  }

  avatarCustom = (e) => {

  }


  render(){
    var chosenName;
    if(chosenName === !<h2>{this.state.avatarName}</h2>){
      chosenName = <h2>'Doggy'</h2>;
    }



    return(
      <div className="av-container">
        <input className="name-select" name='avatarName'placeholder="Select Avatar Name" type="text" onChange={e => this.setState({ avatarName: e.target.value })}/>
        <button id='av-button' onClick={chosenName  = <h2>{this.state.avatarName}</h2>}>Save</button>
        <div id="avatar">
          <div id="chosen-image"></div>
          {this.props.chosenName}
        </div>
      </div>
    )
  }
}


export default Avatars;
