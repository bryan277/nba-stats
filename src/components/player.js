import React, { Component } from 'react';
import '../styles/player.css'

class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
      showExtendedData: false,
    }

    this.toggleExtendedData = this.toggleExtendedData.bind(this);
  }

  getClassExtendedData(showExtendedData){
    if (showExtendedData){
      return 'expanded-data-container';
    } else {
      return 'expanded-data-container hide';
    }
  }

  toggleExtendedData(showExtendedData, event){
    // it seems like you you need to click div.simple-data-container for it to work properly
    // so even if you click on the name, position, or jersey number, this doesn't work as intended - it has to do with event.target.nextSibling
    // now that we split it into it's own component, we can utilize the state to decide if we hide or show the expanded data

    // if(event.target.nextSibling != null && event.target.nextSibling.classList[0] === "expanded-data-container"){
    //   event.target.nextSibling.classList.toggle("hide")
    // }

    this.setState({showExtendedData: !showExtendedData})
  }

  render(){
    const showExtendedData = this.state.showExtendedData;

    const player = this.props.player;

    return (
      <div className="player-container" onClick={this.toggleExtendedData.bind(null, showExtendedData)}>
        <div className="headshot"><img src={`http://${player.pic_url}`} alt="headshot"/></div>
        <div className="simple-data-container">
          <div className="name-position-container">
            <div className="name">{player.name}</div>
            <div className="position">{player.position}</div>
          </div>
          <div className="jersey-number">{player.jersey_number}</div>
        </div>
        <div className={this.getClassExtendedData(showExtendedData)}>
          <div className="bio-container">
            <div className="expanded-data-item height">
              <div className="edi-attribute">Height:</div>
              <div className="edi-attribute-data">{player.height}</div>
            </div>
            <div className="expanded-data-item weight">
              <div className="edi-attribute">Weight:</div>
              <div className="edi-attribute-data">{player.weight}</div>
            </div>
            <div className="expanded-data-item dob">
              <div className="edi-attribute">DOB:</div>
              <div className="edi-attribute-data">{player.dob}</div>
            </div>
            <div className="expanded-data-item prior-to-nba">
              <div className="edi-attribute">Prior to NBA:</div>
              <div className="edi-attribute-data">{player.prior_to_nba}</div>
            </div>
            <div className="expanded-data-item country">
              <div className="edi-attribute">Country:</div>
              <div className="edi-attribute-data">{player.country}</div>
            </div>
            <div className="expanded-data-item years-in-nba">
              <div className="edi-attribute">Years in NBA:</div>
              <div className="edi-attribute-data">{player.years_pro}</div>
            </div>
          </div>
          <div className="player-stats-container">
            <div className="player-stats-item games">
              <div className="player-stats-item-attribute">GAMES</div>
              <div className="player-stats-item-data">{player.games_played}</div>
            </div>
            <div className="player-stats-item ppg">
              <div className="player-stats-item-attribute">PPG</div>
              <div className="player-stats-item-data">{player.ppg}</div>
            </div>
            <div className="player-stats-item rpg">
              <div className="player-stats-item-attribute">RPG</div>
              <div className="player-stats-item-data">{player.rpg}</div>
            </div>
            <div className="player-stats-item apg">
              <div className="player-stats-item-attribute">APG</div>
              <div className="player-stats-item-data">{player.apg}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;