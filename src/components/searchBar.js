import React, { Component } from 'react';
import '../styles/teams.css'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: "",
      teams: [
        "76ers", "blazers", "bucks", "bulls", "cavaliers",
        "celtics", "clippers", "grizzlies", "hawks", "heat",
        "hornets", "jazz", "kings", "knicks", "lakers",
        "magic", "mavericks", "nets", "nuggets", "pacers",
        "pelicans", "pistons", "raptors", "rockets", "spurs",
        "suns", "thunder", "timberwolves", "warriors", "wizards"
       ],
       searchResults: [
        "76ers", "blazers", "bucks", "bulls", "cavaliers",
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
      return team.includes(input);
    });

    this.setState({searchResults: filteredTeams});
    console.log(input)
  }


  render(){
    return(
      <div>
        <div className="search-container">
          <input type="text" className="search" value={this.state.searchInput} onChange={this.handleInputChange} />
        </div>
        <div className="teams-container">
          { this.state.searchResults.map((team, index) =>
            <div className="team" key={index}>
              <img src={`/images/teams/${team}.png`} alt={team} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBar;