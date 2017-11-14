import React, { Component } from 'react';
import SearchBar from './components/searchBar'
import Roster from './components/roster'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Roster />
      </div>
    );
  }
}

export default App;
