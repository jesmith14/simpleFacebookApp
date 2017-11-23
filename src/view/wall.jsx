import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PostDetail from './post-detail';

class Wall extends Component {
    constructor(props) {
        super(props);
    }

    renderWall() {
        if(!this.props.wall) {
            console.log(this.props.wall);
            return <div>...Loading Wall...</div>
        }
        
        return this.props.wall.map((post => {
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
        return (
            <div className='wall'>
                <h4 style={{ textAlign:'center'}}>Wall:</h4>
                <div className='wallPosts'>
                    <ul className='list-group'>
                        {/* {this.renderWall()} */}
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
//Promote NewsFeed from a component to a container - it needs to know about this new dispatch
//method newPost, make it available as a prop.
export default connect(mapStateToProps)(Wall);