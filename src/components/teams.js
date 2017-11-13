import React, { Component } from 'react';

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
      teams: ["Warriors"]
    }
  }

  render(){
    return(
      <div className="teams-container">
        { this.state.teams.map((team) =>
          <div className="team">{team}</div>
        )}
      </div>
    )
  }
}

export default Teams;