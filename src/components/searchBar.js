import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchInput: "thank you"
    }
  }

  search(event){
    console.log(event.target.value)
  }

  render(){
    return(
      <div className="search-container">
        <input type="text" className="search" onChange={this.search} />
      </div>
    )
  }
}

export default SearchBar;