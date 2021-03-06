import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newPost, updateNewsfeed} from '../controller'

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wall: this.props.wall,
            newPost: '',
            newWall: this.props.wall,
            username: this.props.username,
            newsfeed: this.props.newsfeed,
            wallUsername: this.props.wallUsername,
            friendsWall: this.props.friendsWall
        }

        this.handleNewPost = this.handleNewPost.bind(this)
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    

    handleNewPost(event) {
        this.props.dispatch(newPost(this.state.newPost));
        this.inputTitle.value = "";
    }

    handlePostChange(event) {
        let newestPost = {content: event.target.value, user: this.state.username, wallUsername: this.state.wallUsername}
        this.setState({newPost: newestPost});
    }

    render() {
        return (
            <div>
                <input 
                type='text'
                className='list-group wallInput'
                onChange={this.handlePostChange}
                ref={el => this.inputTitle = el}
                />
                <button style={{display:'block', margin:'auto'}} onClick={this.handleNewPost}>Post!</button>
            </div>
        );
    }


}

const mapStateToProps = state => ({wall: state.wall, username: state.username, newsfeed: state.newsfeed})
export default connect(mapStateToProps)(PostDetail);