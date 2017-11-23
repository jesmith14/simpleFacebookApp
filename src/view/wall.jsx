import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './post-detail';

class Wall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wall: this.props.data.wall
        }
    }

    renderWall() {
        return this.props.data.wall.map((post => {
            return (
                <li
                    key={post.content}
                    className='list-group-item'>
                    <p>Post: {post.content}</p>
                </li>
            );
        }));
    }

    render() {
        console.log('*in wall: ', this.props.data.wall)
        return (
            <div className='wall'>
                <h4 style={{ textAlign:'center'}}>Wall:</h4>
                <div className='wallPosts'>
                    <ul className='list-group'>
                        {this.renderWall()}
                    </ul>
                </div>
                <div>
                    <strong><p style={{marginLeft:'10px', marginTop:'10px', textAlign:'center'}}>Write on Jessie's Wall: </p></strong>
                    {/* <PostDetail /> */}
                    {/* <input className='list-group wallInput'/> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({data:state})
export default connect(mapStateToProps)(Wall);