import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendsList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        friends: this.props.data.friends
    }

    renderFriends() {
        return this.state.friends.map((friend => {
            return (
                <li
                    key={friend.user}
                    /* onClick={() => this.props.selectBook(book)} */
                    className='list-group-item'>
                    <p>{friend.user}</p>
                </li>
            );
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

const mapStateToProps = state => ({data: state})

export default connect(mapStateToProps)(FriendsList)