import React, { Component } from 'react'
import { Zoom } from 'react-reveal';
import '../styles/style.css'

class Roster extends Component {
  constructor(props){
    super(props);

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

  toggleExtendedData(event){
    if(event.target.nextSibling != null && event.target.nextSibling.classList[0] === "expanded-data-container"){
      event.target.nextSibling.classList.toggle("hide")
    }
  }

  render(){
    return(
      <div className="roster-container">
        <div className="team-logo">
          <img src={`/images/teams/${this.state.team}.png`} alt="logo" />
        </div>
        <Zoom>
        <div className="players">
          {this.state.roster.map((player) =>
            <div className="player-container" key={player.id} onClick={(e) => {this.toggleExtendedData(e)}}>
              <div className="headshot">
                <img src={`http://${player.pic_url}`} alt="headshot"/>
              </div>
              <div className="simple-data-container">
                <div className="name-position-container">
                  <div className="name">
                    {player.name}
                  </div>
                  <div className="position">
                    {player.position}
                  </div>
                </div>
                <div className="jersey-number">
                  {player.jersey_number}
                </div>
              </div>
              <div className="expanded-data-container hide">
                <div className="bio-container">
                  <div className="expanded-data-item height">
                    <div className="edi-attribute">
                      Height:
                    </div>
                    <div className="edi-attribute-data">
                      {player.height}
                    </div>
                  </div>
                  <div className="expanded-data-item weight">
                    <div className="edi-attribute">
                      Weight:
                    </div>
                    <div className="edi-attribute-data">
                      {player.weight}
                    </div>
                  </div>
                  <div className="expanded-data-item dob">
                    <div className="edi-attribute">
                      DOB:
                    </div>
                    <div className="edi-attribute-data">
                      {player.dob}
                    </div>
                  </div>
                  <div className="expanded-data-item prior-to-nba">
                    <div className="edi-attribute">
                      Prior to NBA:
                    </div>
                    <div className="edi-attribute-data">
                      {player.prior_to_nba}
                    </div>
                  </div>
                  <div className="expanded-data-item country">
                    <div className="edi-attribute">
                      Country:
                    </div>
                    <div className="edi-attribute-data">
                      {player.country}
                    </div>
                  </div>
                  <div className="expanded-data-item years-in-nba">
                    <div className="edi-attribute">
                      Years in NBA:
                    </div>
                    <div className="edi-attribute-data">
                      {player.years_pro}
                    </div>
                  </div>
                </div>
                <div className="player-stats-container">
                  <div className="player-stats-item games">
                    <div className="player-stats-item-attribute">
                      GAMES
                    </div>
                    <div className="player-stats-item-data">
                      {player.games_played}
                    </div>
                  </div>
                  <div className="player-stats-item ppg">
                    <div className="player-stats-item-attribute">
                      PPG
                    </div>
                    <div className="player-stats-item-data">
                      {player.ppg}
                    </div>
                  </div>
                  <div className="player-stats-item rpg">
                    <div className="player-stats-item-attribute">
                      RPG
                    </div>
                    <div className="player-stats-item-data">
                      {player.rpg}
                    </div>
                  </div>
                  <div className="player-stats-item games apg">
                    <div className="player-stats-item-attribute">
                      APG
                    </div>
                    <div className="player-stats-item-data">
                      {player.apg}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </Zoom>
      </div>
    )
  }
}

export default Roster;