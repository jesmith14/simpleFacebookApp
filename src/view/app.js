import React, { Component } from 'react';
import Login from './login';
// import Profile from './profile';
// import SearchBar from './search-bar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }
 
  render() {
    return(
      <div>
        <Login />
      </div>
    );
  }
}
