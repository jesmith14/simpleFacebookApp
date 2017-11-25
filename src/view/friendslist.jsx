import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setWallUsername} from '../controller';
import GenericWall from './genericwall'

class FriendsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: this.props.friends,
            wallUsername: this.props.wallUsername,
            genericWall: false
        }

        this.handleFriendClick = this.handleFriendClick.bind(this)
    }


    handleFriendClick(friendUser) {
        this.setState({genericWall: true})
        this.setState({wallUsername: friendUser})
        // this.props.dispatch(setWallUsername(this.state.wallUsername));
    }

    renderGenericWall() {
        return (
        <div>
            <GenericWall wallUsername={this.state.wallUsername}/>
        </div>
        );
    }

    renderFriends() {
        return this.state.friends.map((friend => {
            return (
                <li
                    key={friend.user}
                    onClick={() => this.handleFriendClick(friend.user)}
                    className='list-group-item'>
                    <p>{friend.user}</p>
                </li>
            );
        }));
    }

    renderFriendsorGenericWall() {
        if(this.state.genericWall == true) {
            return this.renderGenericWall();
        } else {
            return this.renderFriends();
        }
    }

    render() {
        console.log('in friendslistrender', this.state)
        return (
            <div className='friendsList'>
                <h4 style={{textAlign:'center'}}>Friends:</h4>
                <div className='friendsListItem'>
                <ul className='list-group'>
                    {this.renderFriendsorGenericWall()}
                </ul>
                </div>
                <div style={{height:'25px'}}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({wallUsername: state.wallUsername, friends: state.friends})

export default connect(mapStateToProps)(FriendsList)