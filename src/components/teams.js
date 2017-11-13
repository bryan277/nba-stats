import React, { Component } from 'react';

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [
        "76ers", "blazers", "bucks", "bulls", "cavaliers",
        "celtics", "clippers", "grizzlies", "hawks", "heat",
        "hornets", "jazz", "kings", "knicks", "lakers",
        "magic", "mavericks", "nets", "nuggets", "pacers",
        "pelicans", "pistons", "raptors", "rockets", "spurs",
        "suns", "thunder", "timberwolves", "warriors", "wizards"
       ]
    }
  }

  render(){
    return(
      <div className="teams-container">
        { this.state.teams.map((team, index) =>
          <div className="team" key={index}><img src={`/images/teams/${team}.png`} alt={team} /></div>
        )}
      </div>
    )
  }
}

export default Teams;