import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setOnGenericWall, setWallUsername} from '../controller';
import GenericWall from './genericwall';

class FriendsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // friends: this.props.friends,
            wallUsername: this.props.wallUsername,
            genericWall: false,
            onFriends: this.props.onFriends
        }

        this.handleFriendClick = this.handleFriendClick.bind(this)
    }

    handleFriendClick(event) {
        event.preventDefault();
        let content = event.dispatchMarker.replace(/[^a-zA-Z ]/g, '')
        // let content = event.dispatchMarker.substring(22, event.dispatchMarker.length - 2)
        // console.log('LOOK FOR THE USERNAME OF FRIEND', event.dispatchMarker.substring(22))
        this.props.dispatch(setWallUsername(content))
        this.props.dispatch(setOnGenericWall(content))
        // this.setState({genericWall: true})
        // this.setState({wallUsername: event.key})   

    }

    renderFriends() {
        return this.props.users.map((user => {
            if(user.following == true && user.user !== this.props.username) {
                return (
                    <li
                        key={user.user}
                        onClick={this.handleFriendClick}
                        className='list-group-item'>
                        <p>{user.user}</p>
                    </li>
                );
            }
        }));
    }

    render() {
        return (
            <div className='friendsList'>
                <h4 style={{textAlign:'center'}}>Friends:</h4>
                <div className='friendsListItem'>
                <ul className='list-group'>
                    {this.renderFriends()}
                </ul>
                </div>
                <div style={{height:'25px'}}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({wallUsername: state.wallUsername, friends: state.friends, onFriends: state.onFriends, users: state.users, username: state.username})

export default connect(mapStateToProps)(FriendsList)