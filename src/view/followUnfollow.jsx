import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFollowing, setUnFollowing } from '../controller'
import { Button, Glyphicon } from 'react-bootstrap'

class FollowUnfollow extends Component {
    constructor(props) {
        super(props)


        this.setFollow = this.setFollow.bind(this)
        this.setUnFollow = this.setUnFollow.bind(this)
    
    }

    setFollow() {
        this.props.dispatch(setFollowing(this.props.wallUsername))
    }

    setUnFollow() {
        this.props.dispatch(setUnFollowing(this.props.wallUsername))
    }

    
    handleRender() {
        if(this.props.wallUsername !== this.props.username) {
            for(let i = 0; i < this.props.users.length; i++) {
                if(this.props.users[i].user === this.props.wallUsername) {
                    if(this.props.users[i].following == false) {
                        return (
                            <Button
                                onClick={this.setFollow}
                            ><img width='20px' height='20px' src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/magic-marker-icons-alphanumeric/114647-magic-marker-icon-alphanumeric-plus-sign-simple.png'/>Follow</Button>
                        );
                    }
                    else {
                        return (
                            <Button
                                onClick={this.setUnFollow}
                            ><img width='20px' height='20px' src='https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//minus1600.png'/>Unfollow</Button>
                        );
                    }
                }
            }
        }
    }

    render() {
        return <div>{this.handleRender()}</div>
    }
 }

 const mapStateToProps = state => ({wallUsername: state.wallUsername, username: state.username, users: state.users})
 export default connect(mapStateToProps)(FollowUnfollow)