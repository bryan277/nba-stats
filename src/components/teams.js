import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';

import '../styles/teams.css'

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: "",
      teams: [
        "sixers", "blazers", "bucks", "bulls", "cavaliers",
        "celtics", "clippers", "grizzlies", "hawks", "heat",
        "hornets", "jazz", "kings", "knicks", "lakers",
        "magic", "mavericks", "nets", "nuggets", "pacers",
        "pelicans", "pistons", "raptors", "rockets", "spurs",
        "suns", "thunder", "timberwolves", "warriors", "wizards"
       ],
       searchResults: [
        "sixers", "blazers", "bucks", "bulls", "cavaliers",
        "celtics", "clippers", "grizzlies", "hawks", "heat",
        "hornets", "jazz", "kings", "knicks", "lakers",
        "magic", "mavericks", "nets", "nuggets", "pacers",
        "pelicans", "pistons", "raptors", "rockets", "spurs",
        "suns", "thunder", "timberwolves", "warriors", "wizards"
       ]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event){
    this.setState({searchInput: event.target.value});

    this.filterTeams(event.target.value)
  }

  filterTeams(input){
    let filteredTeams = this.state.teams.filter(function(team){
      return team.includes(input.toLowerCase());
    });

    this.setState({searchResults: filteredTeams});
  }

  renderResults(searchResults){
    return searchResults.map((team, index) => {
      return (
        <Fade key={index}>
          <Link to={`/${team}/roster`}>
            <div className="team hvr-underline-from-center hvr-grow-shadow">
              <img src={`/images/teams/${team}.png`} alt={team} />
            </div>
          </Link>
        </Fade>
      )
    })
  }

  render(){
    const searchResults = this.state.searchResults;
    const searchInput = this.state.searchInput;

    return(
      <div className="main-container">
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search your team..."
            value={searchInput}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="teams-container">
          {this.renderResults(searchResults)}
        </div>
      </div>
    )
  }
}

export default Teams;
