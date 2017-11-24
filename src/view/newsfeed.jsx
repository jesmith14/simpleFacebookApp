import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state={
            newsfeed: this.props.data.newsfeed,
            username: this.props.data.username
        }
    }

    renderNewsFeed() {
        return this.state.newsfeed.map((post => {
            console.log('HERE BB', post)
            return (
                <li
                    key={post.content}
                    className='list-group-item'>
                    <p><u><strong className='user'>{post.user}</strong> posted on <strong className='user'>{post.wallUsername}</strong>'s wall:</u>
                    <br/>
                    {post.content}</p>
                </li>
            );
        }));
    }

    render() {
        return (
            <div className='newsFeed'>
                <h4 style={{textAlign:'center'}}>News Feed:</h4>
                <div className='newsfeedPosts'>
                    <ul className='list-group'>
                        {this.renderNewsFeed()}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({data:state})

export default connect(mapStateToProps)(NewsFeed)
