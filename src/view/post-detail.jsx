import React, { Component } from 'react'
import { connect } from 'react-redux'
import {newPost} from '../controller'
// import { bindActionCreators } from 'redux';
// import { newPost } from '../actions/index';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wall: this.props.wall,
            newPost: '',
            newWall: this.props.wall
        }

        this.handleNewPost = this.handleNewPost.bind(this)
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    

    handleNewPost(event) {
        // console.log('IN HANDLE NEW POST: new wall: ', this.state.newWall);
        console.log('IN HANDLE NEW POST: this.state.wall', this.state.wall);
        console.log('IN HANDLE NEW POST: this.state.newPost', this.state.newPost);
        // this.setState({newWall: this.state.newWall.unshift(this.state.newPost)});
        this.state.wall.unshift(this.state.newPost)
        console.log('HEREE', this.state.wall)
        this.setState({wall: this.state.wall})
        // this.setState({wall: this.state.newWall});
        this.props.dispatch(newPost());
        this.setState({newPost: ''})
        this.inputTitle.value = "";
        console.log('IN HANDLE NEW POST: after dispatching the action: ', this.state.wall);
    }

    handlePostChange(event) {
        console.log('IN HANDLE POST CHANGE: ', this.state.wall);
        let newestPost = {content: event.target.value}
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
                <button onClick={this.handleNewPost}>Post!</button>
            </div>
        );
    }


}

const mapStateToProps = state => ({wall: state.wall})
export default connect(mapStateToProps)(PostDetail);