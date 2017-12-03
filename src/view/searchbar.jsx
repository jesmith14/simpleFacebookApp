import React, { Component } from 'react'
import {updateSearchTerm} from '../controller/index.js'
import { connect } from 'react-redux';

class SearchBar extends Component{
    constructor(props) {
        super(props)


        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.props.dispatch(updateSearchTerm(event.target.value))
    }
  
   render() {
        return (
            <div className='row'>
            <div className='col-xs-1'>
            <img width='30px' height='30px' src='http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png' />
            </div>
            <div className='col-xs-11'>
                <input 
                className='search-bar'
                onChange={this.onInputChange}/>
             </div>
             </div>
        );
    }
  
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(SearchBar);