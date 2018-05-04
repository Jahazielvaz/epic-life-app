import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstName: '',
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
      <form id="signup-container" action="/register" method="POST">
        <input placeholder='First Name' name='firstname' value={this.state.firstName} onChange={e => this.change(e)} />
        <input placeholder='Last Name' name='lastname' value={this.state.lastName} onChange={e => this.change(e)} />
        <input placeholder='Email' name='email' value={this.state.email} onChange={e => this.change(e)} />
        <input placeholder='Username' name='username' value={this.state.username} onChange={e => this.change(e)} />
        <input placeholder='Password' name='password' value={this.state.password} onChange={e => this.change(e)} type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default SignUp;
