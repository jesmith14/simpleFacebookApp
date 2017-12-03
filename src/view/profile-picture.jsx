import React, { Component } from 'react';

export default class ProfilePicture extends Component{
    render() {
        return (
            <div className='profile-photo'>
                <img src={this.props.pictureURL}/>
            </div>
        );
    }
}