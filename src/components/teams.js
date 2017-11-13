import React, { Component } from 'react';

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: ["warriors", "bucks"]
    }
  }

  render(){
    return(
      <div className="teams-container">
        { this.state.teams.map((team, index) =>
          <div className="team" key={index}><img src={`/images/teams/${team}.png`} /></div>
        )}
      </div>
    )
  }
}

export default Teams;