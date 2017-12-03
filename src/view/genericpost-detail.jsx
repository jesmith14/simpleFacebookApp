import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newGenericPost, updateNewsfeed, setOnGenericWall} from '../controller'

class GenericPostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: '',
            newWall: this.props.wall,
            newsfeed: this.props.newsfeed,
            friendsWall: this.props.friendsWall
        }

        this.handleNewPost = this.handleNewPost.bind(this)
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    

    handleNewPost(event) {
        this.props.dispatch(newGenericPost(this.state.newPost));
        this.inputTitle.value = "";
    }

    handlePostChange(event) {
        console.log('IN THE NEW POST: username', this.props.username)
        console.log('IN THE NEW POST: wall username', this.props.wallUsername)
        let newestPost = {content: event.target.value, user: this.props.username, wallUsername: this.props.wallUsername}
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

const mapStateToProps = state => ({username: state.username, newsfeed: state.newsfeed, wallUsername: state.wallUsername})
export default connect(mapStateToProps)(GenericPostDetail);