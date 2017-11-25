import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from './post-detail';
import { setWallUsername } from '../controller/index.js';

class GenericWall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.data.username,
            wallUsername: this.props.data.wallUsername
        }
    }

    renderWall() {
        console.log('RENDERING GENERIC WALL!', this.state)
        // this.setState({wallUsername: this.props.user})
       return(
            <div id='genericwall'></div>
       );
    }

    render() {
        return (
            <div className='wall'>
                <h4 style={{ textAlign:'center'}}>Wall:</h4>
                <div className='wallPosts'>
                        {this.renderWall()}
                </div>
                <div>
                    <strong><p style={{marginLeft:'10px', marginTop:'10px', textAlign:'center'}}>Write on {this.props.wallUsername}'s Wall: </p></strong>
                    <PostDetail wallUsername={this.props.wallUsername}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({data:state})
export default connect(mapStateToProps)(GenericWall);