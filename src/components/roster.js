import React, { Component } from 'react'
import { Zoom } from 'react-reveal';

import Player from './player';

class Roster extends Component {
  constructor(props){
    super(props);

    this.state = {
      team: props.match.params.team,
      roster: []
    }
  }

  componentDidMount(){
    fetch(`http://nba-scraper-v1.herokuapp.com/${this.state.team}/roster`)
      .then(response => response.json())
      .then(json => this.setState({roster: json}))
  }

  renderPlayers(roster){
    return roster.map((player) => {
      // when coding in react, think of every component as an object (which it technically is)
      // since a roster has players, a player can be it's own separate component
      return <Player key={player.id} player={player} />
    })
  }

  render(){
    const roster = this.state.roster;

    return(
      <div className="roster-container">
        <div className="team-logo">
          <img src={`/images/teams/${this.state.team}.png`} alt="logo" />
        </div>
        <Zoom>
          <div className="players">
            {this.renderPlayers(roster)}
          </div>
        </Zoom>
      </div>
    )
  }
}

export default Roster;