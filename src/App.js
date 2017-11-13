import React, { Component } from 'react';
import SearchBar from './components/searchBar'
import Teams from './components/teams'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Teams />
      </div>
    );
  }
}

export default App;
