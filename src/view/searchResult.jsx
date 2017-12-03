import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    constructor(props) {
        super(props);

    }

    renderSearchResult() {
        if(this.props.searchTerm != '') {
            console.log('AY LOOK HERE' , this.props)
            let searchedResults = []
            this.props.users.map((user => {
                console.log('this is the user', user.user)
                if(user.user.includes(this.props.searchTerm)) {
                    searchedResults.push(user.user)
                }
            }))
            return searchedResults.map((user => {
                return (
                    <li
                        key={user}
                        className='list-group-item'>
                        <p strong className='user'>{user}</p>
                    </li>
                );
            }))
        }
    }

    render() {
        return(
            <div style={{border:'1px solid black', height:'10vh', overflowY:'scroll'}}>
            This is the search result
                <ul className='list-group'>
                    {this.renderSearchResult()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
    users: state.users
});

export default connect(mapStateToProps)(SearchResult)