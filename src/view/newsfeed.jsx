import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewsFeed extends Component {
    constructor(props) {
        super(props);
    }

    renderNewsFeed() {
        return this.props.newsfeed.map((post => {
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
                <div style={{height:'25px'}}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({newsfeed: state.newsfeed, username: state.username})

export default connect(mapStateToProps)(NewsFeed)
