import React, { Component } from 'react';

class Test extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
    username: '',
    password: '',
  }

  change = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <form id="signup-container" action="/api/test" method="POST">
        <input placeholder='Name' name='name' value={this.state.firstname} onChange={e => this.change(e)} />
        <input placeholder='Email' name='email' value={this.state.email} onChange={e => this.change(e)} />
                <input placeholder='Your Gravatar Email' name='avatar' value={this.state.avatar} onChange={e => this.change(e)} />
        <input placeholder='Username' name='username' value={this.state.username} onChange={e => this.change(e)} />
        <input placeholder='Password' name='password' value={this.state.password} onChange={e => this.change(e)} type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default Test;
