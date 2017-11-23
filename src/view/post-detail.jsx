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
            newPost: ''
        }

        this.handleNewPost = this.handleNewPost.bind(this)
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    

    handleNewPost(event) {
        let recentPost = {content: this.state.newPost}
        let newWall = this.state.wall.push(recentPost)
        console.log('OKI', this.state.newPost)
        this.setState({wall: newWall})
        this.props.dispatch(newPost());
    }

    handlePostChange(event) {
        // console.log('wtf', event.target.value)
        this.setState({newPost: event.target.value});
    }

    render() {
        console.log("****", this.props);
        return (
            <div>
                
                <input 
                type='text'
                className='list-group wallInput'
                onChange={this.handlePostChange}
                />
                <button onClick={this.handleNewPost}>Post!</button>
            </div>
        );
    }


}

const mapStateToProps = state => ({wall: state.wall})
export default connect(mapStateToProps)(PostDetail);