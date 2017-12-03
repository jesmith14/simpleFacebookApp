import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import {setAuth, setUsername, setPassword, setWallUsername, setErrorTrue} from '../controller'
import Facebook from './facebook'


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      validLogin: this.props.loggedIn,
      username: this.props.username,
      password: this.props.password,
      wallUsername: this.props.wallUsername,
      wall: this.props.wall,
      newsfeed: this.props.newsfeed,
      errorLoggingIn: this.props.errorLoggingIn,
      photoURL: this.props.photoURL
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.createWallUsername = this.createWallUsername.bind(this)
    this.errorMessage = this.errorMessage.bind(this)
  }
  

  createWallUsername() {
    this.setState({wallUsername: event.target.value});
  } 

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
    this.createWallUsername(event)
  }

  handleLogin(event) {
    event.preventDefault();
    this.createWallUsername();
    this.props.dispatch(setAuth(this.state.username, this.state.password))
    // this.props.dispatch(setWallUsername(this.state.wallUsername));
    if(this.props.loggedIn == false) {
      this.props.dispatch(setErrorTrue())
    }
    console.log('Initial Wall: ', this.state.wall)
    console.log('Initial Newsfeed: ', this.state.newsfeed)
  }

  errorMessage() {
    if(this.props.errorLoggingIn == true) {
      return <div style={{color:'red'}}>Invalid username and/or password</div>
    }
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
        {this.errorMessage()}
      </div>
      );
  }

  renderFacebook() {
      if(this.props.loggedIn == true) {
            return <Facebook photoURL={this.state.photoURL} wallUsername={this.props.wallUsername}/>
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

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  wallUsername: state.wallUsername,
  wall: state.wall,
  newsfeed: state.newsfeed,
  errorLoggingIn: state.errorLoggingIn,
  photoURL: state.photoURL
})

export default connect(mapStateToProps)(Login)
