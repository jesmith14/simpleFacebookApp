import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from './friendslist';
import GenericWall from './genericwall';

class FriendWalls extends Component {
    constructor(props) {
        super(props);

    }

    renderFriendsOrWall() {
        if(this.props.onFriends == true) {
            console.log('alright are we rendering here')
            return <FriendsList />
        }
        else {
            console.log('ABOUT TO RENDER GENERIC WALL')
            return <GenericWall />
        }
    }

    render() {
        console.log('rendering in friendwalls comp. The onFriends state is: ', this.props.onFriends)
        return(
            <div>
                {this.renderFriendsOrWall()}
            </div>
        );
    }
}

const mapStateToProps = state => ({onFriends: state.onFriends});
export default connect(mapStateToProps)(FriendWalls);