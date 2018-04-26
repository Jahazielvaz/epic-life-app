import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstName: 'dragon',
    lastName: '',
    email: '',
    username: '',
    password: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    return(
      <form>
        <input placeholder='First Name' name='firstName' value={this.state.firstName} onChange={e => this.change(e)} />
        <input placeholder='Last Name' name='lastName' value={this.state.firstName} onChange={e => this.change(e)} />
        
      </form>
    )
  }
}


export default SignUp;
