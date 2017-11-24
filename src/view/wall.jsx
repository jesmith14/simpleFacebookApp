import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './post-detail';
import { setWallUsername } from '../controller/index.js';

class Wall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wall: this.props.data.wall,
            username: this.props.data.username,
            wallUsername: this.props.data.wallUsername
        }

    }

    renderWall() {
                
        return this.props.data.wall.map((post => {
            return (
                <li
                    key={post.content}
                    className='list-group-item'>
                    <p><u><strong className='user'>{post.user}</strong> posted on <strong className='user'>{this.state.wallUsername}</strong>'s wall:</u>
                    <br/>
                     {post.content}</p>
                </li>
            );
        }));
    }

    render() {
        return (
            <div className='wall'>
                <h4 style={{ textAlign:'center'}}>Wall:</h4>
                <div className='wallPosts'>
                    <ul className='list-group'>
                        {this.renderWall()}
                    </ul>
                </div>
                <div>
                    <strong><p style={{marginLeft:'10px', marginTop:'10px', textAlign:'center'}}>Write on {this.state.username}'s Wall: </p></strong>
                    <PostDetail />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({data:state})
export default connect(mapStateToProps)(Wall);