import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    constructor(props) {
        super(props);

    }

    renderSearchResult() {
        if(this.props.searchTerm != '') {
            let searchedResults = []
            this.props.users.map((user => {
                console.log('this is the user', user.user)
                console.log('this is the search term', this.props.searchTerm)
                if(user.user.toUpperCase().includes(this.props.searchTerm.toUpperCase())) {
                    console.log('pushing ', user.user)
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