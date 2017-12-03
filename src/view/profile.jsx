import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePicture from './profile-picture';
import Wall from './wall';
import NewsFeed from './newsfeed';
import FriendWalls from './friendwalls';
import FollowUnfollow from './followUnfollow'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.data.username,
          onFriends: this.props.data.onFriends,
        }
    }

    //props - pictureURL, wallusername
    //in here - render function that has ifUser = redux state.username

    renderFriendWalls() {
      if(this.props.data.wallUsername === this.props.data.username) {
        return <FriendWalls />
      }
    }

    renderNewsFeed() {
      if(this.props.data.wallUsername === this.props.data.username) {
        return <NewsFeed />
      }
    }

    renderWall() {
      for(let i = 0; i < this.props.data.users.length; i++) {
        if(this.props.data.users[i].user === this.props.wallUsername) {
          if(this.props.data.users[i].following == true) {
            return <Wall wallUsername={this.props.wallUsername} onFriendsProfile={this.props.onFriendsProfile}/>
          }
        }
      }
    }
 
    render() {
      console.log('From the Model: ', this.props)
        return (
            <div>
            <div className='row secondRow'>
              <div style={{marginRight:'50px'}} className='col-sm-3'>
                <h4 >{this.props.wallUsername}</h4>
                <ProfilePicture pictureURL={this.props.photoURL}/>
                <FollowUnfollow wallUsername={this.props.wallUsername}/>
              </div>
              <div style={{marginLeft:'50px', border:'2 px solid black'}} className='col-sm-7'>
                {this.renderWall()}
              </div>
            </div>
            <div className='row thirdRow'>
              <div style={{marginRight:'50px'}} className='col-sm-3'>
                {this.renderFriendWalls()}
              </div>
              <div style={{marginLeft:'50px'}} className='col-sm-7'>
                {this.renderNewsFeed()}
              </div>
            </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({data: state})

export default connect(mapStateToProps)(Profile)
