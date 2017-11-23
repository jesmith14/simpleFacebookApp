import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import {setAuth, setUsername, setPassword, setWallUsername} from '../controller'
import Facebook from './facebook'


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validLogin: this.props.loggedIn,
      username: this.props.username,
      password: this.props.password,
      wallUsername: this.props.wallUsername
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.createWallUsername = this.createWallUsername.bind(this)
  }

  createWallUsername() {
    this.setState({wallUsername: this.state.username});
  } 

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    this.createWallUsername();
    this.props.dispatch(setAuth())
    this.props.dispatch(setUsername(this.state.username));
    this.props.dispatch(setPassword(this.state.password));
    this.props.dispatch(setWallUsername(this.state.wallUsername));
  }

  renderLogin() {
      return(
    <div
      style={{
          textAlign:'center',
          width:'50vw',
          border:'thin solid black',
          padding: '15px'
          }}className="Login">
        <form onSubmit={this.handleLogin}>
        <h2>Login to 'Facebook'</h2>
        <hr/>
        <ControlLabel>Username</ControlLabel>
        <br/>
        <input type="text" onChange={this.handleUsernameChange} />
        <br/>
        <ControlLabel style={{marginTop:'10px'}}>Password</ControlLabel>
        <br/>
        <input type="text" onChange={this.handlePasswordChange} />
        <Button
          block
          bsSize="large"
          type="submit"
          onClick={this.handleLogin}
          id='loginButton'
        >
          Login
        </Button>
        </form>
      </div>
      );
  }

  renderFacebook() {
      if(this.props.loggedIn == true) {
            return <Facebook />
      }
      else {
        return (this.renderLogin());
      }
  }

  render() {
      return(
        <div>
            {this.renderFacebook()}
        </div>
      );
  }
}

const mapStateToProps = state => ({loggedIn: state.loggedIn, username: state.username, password: state.password, wallUsername: state.wallUsername})

export default connect(mapStateToProps)(Login)
