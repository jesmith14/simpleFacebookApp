import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './post-detail';
import GenericPostDetail from './genericpost-detail'

class Wall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wall: this.props.wall,
            username: this.props.username,
            wallUsername: this.props.wallUsername
        }

    }

    renderWall() {
            return this.props.newsfeed.map((post => {
                if(post.wallUsername === this.props.wallUsername) {
                    return (
                        <li
                            key={post.content}
                            className='list-group-item'>
                            <p><u><strong className='user'>{post.user}</strong> posted on <strong className='user'>{this.props.wallUsername}</strong>'s wall:</u>
                            <br/>
                            {post.content}</p>
                        </li>
                    );
                }
            }));
    }

    renderPostDetail() {
        if(this.props.wallUsername === this.state.username) {
            console.log('ON USERS WALL', this.props.wallUsername)
            return <PostDetail wallUsername={this.state.wallUsername}/>
        }
        else {
            console.log('ON FRIENDS WALL', this.props.wallUsername)
            return <GenericPostDetail friendsWall={true} wallUsername={this.props.wallUsername}/>
        }
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
                    <strong><p style={{marginLeft:'10px', marginTop:'10px', textAlign:'center'}}>Write on {this.props.wallUsername}'s Wall: </p></strong>
                    {this.renderPostDetail()}
                    {/* <PostDetail wallUsername={this.state.wallUsername}/> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({wall: state.wall, username: state.username, wallUsername: state.wallUsername, newsfeed: state.newsfeed})
export default connect(mapStateToProps)(Wall);