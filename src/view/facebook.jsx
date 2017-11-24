import React, { Component } from 'react';
import {connect} from 'react-redux';
import Profile from './profile';
// import SearchBar from './search-bar';

class Facebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
    }

  }

  friendSearch() {
    // console.log('friend search');
  }
 
 
 
  render() {
    return (
      <div className='container'>
        <div className='row topRow'>
            <h2 style={{textAlign:'center'}}>Facebook</h2>
        </div>
        <hr/>
        <div className='row'>
          
          {/* <SearchBar className='searchbar' onSearchTermChange={this.friendSearch()} /> */}
        </div>
        <Profile />
      </div>
    );
  }
}

const mapStateToProps = state => ({data: state})

export default connect(mapStateToProps)(Facebook)
