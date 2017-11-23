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
        this.state.wall.unshift(this.state.newPost)
        this.setState({wall: this.state.wall})
        this.props.dispatch(newPost());
        this.setState({newPost: ''})
        this.inputTitle.value = "";
        console.log('Wall Posts: ', this.state.wall);
    }

    handlePostChange(event) {
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