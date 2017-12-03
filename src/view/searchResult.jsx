import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { setPhotoURL, setWallUsername } from '../controller';

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoURL: '',
            userClicked: false
        }


        this.handleFriendProfile = this.handleFriendProfile.bind(this)
    }

    renderSearchResult() {
        if(this.props.searchTerm != '') {
            let searchedResults = []
            this.props.users.map((user => {
                if(user.user.toUpperCase().includes(this.props.searchTerm.toUpperCase()) && user.user != this.props.wallUsername) {
                    searchedResults.push(user)
                }
            }))
            return searchedResults.map((user => {
                return (
                    <li
                        key={user.photoURL}
                        onClick={ () => this.handleFriendProfile(user)}
                        className='list-group-item'>
                        <p strong className='user'>{user.user}</p>
                    </li>
                );
            }))
        }
    }

    handleFriendProfile(user) {
        // this.setState({userClicked:true, photoURL: user.photoURL})
        this.props.dispatch(setPhotoURL(user.photoURL))
        this.props.dispatch(setWallUsername(user.user))
    }

    render() {
        return(
            <div>
            <div style={{border:'1px solid black', height:'10vh', overflowY:'scroll', marginLeft: '7.6vw'}}>
            This is the search result
                <ul className='list-group'>
                    {this.renderSearchResult()}
                </ul>
            </div>
            <hr/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
    users: state.users,
    wallUsername: state.wallUsername
});

export default connect(mapStateToProps)(SearchResult)