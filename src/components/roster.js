import React, { Component } from 'react'

class Roster extends Component {
  constructor(props){
    super(props);

    console.log(props.match.params.team);
     this.state = {
        team: props.match.params.team,
        roster: []
     }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/${this.state.team}/roster`)
      .then(response => response.json())
      .then(json => {
        this.setState({roster: json})
      })
  }

  render(){
    return(
      <div className="roster-container">
        {this.state.roster.map((player) =>
          <div className="player" key={player.id}>
            <img src={`http://${player.pic_url}`} alt={player.name}/>
            { player.name }
            { player.position }
          </div>
        )}
      </div>
    )
  }
}

export default Roster;