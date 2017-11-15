import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import SearchBar from './components/searchBar'
import Roster from './components/roster'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/:team/roster" component={Roster} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
