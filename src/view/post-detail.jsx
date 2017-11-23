import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { newPost } from '../actions/index';

class PostDetail extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        if(!this.props.post) {
            return <div>Write a post to get started</div>;
        }
        console.log("****", this.props.post);
        return (
            <div>
                
                <input 
                className='list-group wallInput'
                onInputChange={() => this.props.newPost(post)} 
                />
                <div>Post: {this.props.post}</div>
            </div>
        );
    }


}

const mapStateToProps = state => ({data:state})
export default connect(mapStateToProps)(PostDetail);