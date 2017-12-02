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
            return <FriendsList />
        }
        else {
            return <GenericWall />
        }
    }

    render() {
        return(
            <div>
                {this.renderFriendsOrWall()}
            </div>
        );
    }
}

const mapStateToProps = state => ({onFriends: state.onFriends});
export default connect(mapStateToProps)(FriendWalls);