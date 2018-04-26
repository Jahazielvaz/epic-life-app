import React, { Component } from 'react';

class Login extends Component{
  state = {
    username: '',
    password: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <form id="login">
        <input name="username" placeholder="Username" value={this.state.username} type="text" onChange={e => this.change(e)} /><br />
        <input name="password" placeholder="Password" type="password" value={this.state.password} onChange={e => this.change(e)} /><br />

        <button onClick={e => this.onSubmit(e)}>SUBMIT</button>
      </form>
    )
  }
}


export default Login;
