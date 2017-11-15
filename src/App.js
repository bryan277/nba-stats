import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from './components/header'
import Roster from './components/roster'
import Teams from './components/teams'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Teams} />
        <Route exact path="/:team/roster" component={Roster} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
