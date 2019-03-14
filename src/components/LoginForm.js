import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handeSubmit = event => {
    event.preventDefault()
    if (this.state.username != '' && this.state.password != ''){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handeSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value={this.state.username}
             onChange={(event) => this.handleUsernameChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
             value ={this.state.password} onChange={(event) => this.handlePasswordChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
