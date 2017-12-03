import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { Button } from 'react-bootstrap';
import {setAuth, setErrorFalse} from '../controller';
import SearchBar from './searchbar';
import SearchResult from './searchResult';

class Facebook extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this)

  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(setErrorFalse())
    this.props.dispatch(setAuth(this.props.data.username, this.props.data.password))
  }
 
 
 
  render() {
    return (
      <div className='container'>
        <div className='row topRow'>
          <div className='col'>
            <h2 style={{textAlign:'center', backgroundColor:'#3b5998', color:'#fff'}}>
            Facebook
            </h2>
          </div>
          <div className='col'>
            <div style={{right:'0', color:'#000', height:'5vh'}}>
              <Button 
                style={{position:'absolute', right:'0', marginRight:'15vw'}}
                className='btn btn-info'
                onClick={this.handleLogout}
                >
                Log Out</Button>
            </div>
          </div>
        </div>
        <hr/>
        <div className='row searchRow'>
          <SearchBar/>
          <SearchResult/>
        </div>
        <div className='row'>
        </div>
        <Profile />
      </div>
    );
  }
}

const mapStateToProps = state => ({data: state})

export default connect(mapStateToProps)(Facebook)
