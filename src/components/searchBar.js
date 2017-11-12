import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchInput: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({searchInput: event.target.value})

    console.log(this.state.searchInput)
  }

  render(){
    return(
      <div className="search-container">
        <input type="text" className="search" value={this.state.searchInput} onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default SearchBar;