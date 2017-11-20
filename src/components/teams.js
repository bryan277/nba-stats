import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';

class Teams extends Component {
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
  }

  // I personally like to create a separate function instead of creating the function within the render function
  // Since we create the variable inside the render function, it's better to pass it as an argument instead of calling this.state.searchResults
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
    // This is my personal preference that I create variables at the beginning of the render function
    // I'm not completely sure if it is best practice, but like I mentioned, my team is so small that there isn't any telling me if this is good or not so you can decide if you wan to adopt this practice or not
    // this way, I know which variables I'm using from the state instead of using cmd + f to find what I'm calling
    // or if you decide you want to change the variable name, you know to look to look at the beginning of the render function
    const searchResults = this.state.searchResults;
    const searchInput = this.state.searchInput;

    // if an element has a lot of properties (more than 2), you need to have each property in it's own separate line
    // this makes it easier to read and find the props
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