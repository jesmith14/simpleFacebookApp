// import React, { Component } from 'react';

// class SearchBar extends Component {

//    constructor(props) {
//        super(props);

//        this.state = {friend: ''};
//    }

  
//    render() {
//         return (
//             <div className='row'>
//             <div className='col-xs-1'>
//             <img width='30px' height='30px' src='http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png' />
//             </div>
//             <div className='col-xs-11'>
//                 <input 
//                 className='search-bar'
//                 value={this.state.friend}
//                 onChange={event => this.onInputChange(event.target.value)}/>
//              </div>
//              </div>
//         );
  
//    }

//    onInputChange(friend) {
//        this.setState({friend});

//        //the callback passed in by the parent props from index.js
//        this.props.onSearchTermChange(friend);
//    }
// }
// export default SearchBar;
