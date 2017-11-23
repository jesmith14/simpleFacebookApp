import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './profile-picture';
import Wall from './wall';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.username
        }
    }

    render() {
        return (
            <div>
            <div className='row secondRow'>
              <div style={{marginRight:'50px'}} className='col-sm-3'>
                <h4 >Welcome, {this.props.data.username}</h4>
                <ProfilePicture />
              </div>
              <div style={{marginLeft:'50px', border:'2 px solid black'}} className='col-sm-7'>
                <Wall />
              </div>
            </div>
            <div className='row thirdRow'>
              <div style={{marginRight:'50px'}} className='col-sm-3'>
                {/* <FriendsList /> */}
              </div>
              <div style={{marginLeft:'50px'}} className='col-sm-7'>
                {/* <NewsFeed /> */}
              </div>
            </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({data: state})

export default connect(mapStateToProps)(Profile)
