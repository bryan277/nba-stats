import React, { Component } from 'react'
import { Zoom } from 'react-reveal';
import '../styles/style.css'

class Roster extends Component {
  constructor(props){
    super(props);

    console.log(props.match.params.team);
     this.state = {
        team: props.match.params.team,
        roster: [{"id":0,"name":"Jordan Bell","jersey_number":"2","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628395.png","position":"Forward","height":"6' 9","weight":"224lbs","dob":"01/07/1995","prior_to_nba":"Oregon","country":"USA","years_pro":"0","games_played":"11","ppg":"3.5","rpg":"2.3","apg":"1.0"},{"id":1,"name":"Chris Boucher","jersey_number":"25","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628449.png","position":"Forward","height":"6' 10","weight":"200lbs","dob":"01/11/1993","prior_to_nba":"Oregon","country":"Canada","years_pro":"0","games_played":"0","ppg":"0.0","rpg":"0.0","apg":"0.0"},{"id":2,"name":"Omri Casspi","jersey_number":"18","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201956.png","position":"Forward","height":"6' 9","weight":"225lbs","dob":"06/22/1988","prior_to_nba":"Maccabi Tel Aviv","country":"Israel","years_pro":"8","games_played":"11","ppg":"5.1","rpg":"3.1","apg":"0.9"},{"id":3,"name":"Quinn Cook","jersey_number":"4","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626188.png","position":"Guard","height":"6' 2","weight":"179lbs","dob":"03/23/1993","prior_to_nba":"Duke","country":"USA","years_pro":"1","games_played":"2","ppg":"1.0","rpg":"0.0","apg":"0.0"},{"id":4,"name":"Stephen Curry","jersey_number":"30","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png","position":"Guard","height":"6' 3","weight":"190lbs","dob":"03/14/1988","prior_to_nba":"Davidson","country":"USA","years_pro":"8","games_played":"13","ppg":"25.2","rpg":"4.7","apg":"6.7"},{"id":5,"name":"Kevin Durant","jersey_number":"35","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201142.png","position":"Forward","height":"6' 9","weight":"240lbs","dob":"09/29/1988","prior_to_nba":"Texas","country":"USA","years_pro":"10","games_played":"13","ppg":"24.8","rpg":"7.5","apg":"5.2"},{"id":6,"name":"Draymond Green","jersey_number":"23","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203110.png","position":"Forward","height":"6' 7","weight":"230lbs","dob":"03/04/1990","prior_to_nba":"Michigan State","country":"USA","years_pro":"5","games_played":"14","ppg":"10.9","rpg":"7.6","apg":"6.6"},{"id":7,"name":"Andre Iguodala","jersey_number":"9","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2738.png","position":"Guard-Forward","height":"6' 6","weight":"215lbs","dob":"01/28/1984","prior_to_nba":"Arizona","country":"USA","years_pro":"13","games_played":"12","ppg":"5.1","rpg":"3.4","apg":"3.3"},{"id":8,"name":"Damian Jones","jersey_number":"15","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627745.png","position":"Center","height":"7' 0","weight":"245lbs","dob":"06/30/1995","prior_to_nba":"Vanderbilt","country":"USA","years_pro":"1","games_played":"0","ppg":"0.0","rpg":"0.0","apg":"0.0"},{"id":9,"name":"Shaun Livingston","jersey_number":"34","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2733.png","position":"Guard","height":"6' 7","weight":"192lbs","dob":"09/11/1985","prior_to_nba":"Peoria Central HS (IL)","country":"USA","years_pro":"12","games_played":"12","ppg":"5.4","rpg":"2.3","apg":"2.5"},{"id":10,"name":"Kevon Looney","jersey_number":"5","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626172.png","position":"Forward","height":"6' 9","weight":"220lbs","dob":"02/06/1996","prior_to_nba":"UCLA","country":"USA","years_pro":"2","games_played":"7","ppg":"4.1","rpg":"3.0","apg":"0.3"},{"id":11,"name":"Patrick McCaw","jersey_number":"0","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627775.png","position":"Guard","height":"6' 7","weight":"185lbs","dob":"10/25/1995","prior_to_nba":"Nevada-Las Vegas","country":"USA","years_pro":"1","games_played":"13","ppg":"3.7","rpg":"0.8","apg":"1.0"},{"id":12,"name":"JaVale McGee","jersey_number":"1","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201580.png","position":"Center","height":"7' 0","weight":"270lbs","dob":"01/19/1988","prior_to_nba":"Nevada","country":"USA","years_pro":"9","games_played":"12","ppg":"5.0","rpg":"2.4","apg":"0.3"},{"id":13,"name":"Zaza Pachulia","jersey_number":"27","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2585.png","position":"Center","height":"6' 11","weight":"270lbs","dob":"02/10/1984","prior_to_nba":"Ulkerspor","country":"Georgia","years_pro":"14","games_played":"14","ppg":"3.9","rpg":"5.0","apg":"0.9"},{"id":14,"name":"Klay Thompson","jersey_number":"11","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202691.png","position":"Guard","height":"6' 7","weight":"215lbs","dob":"02/08/1990","prior_to_nba":"Washington State","country":"USA","years_pro":"6","games_played":"14","ppg":"20.6","rpg":"3.9","apg":"2.8"},{"id":15,"name":"David West","jersey_number":"3","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2561.png","position":"Forward","height":"6' 9","weight":"250lbs","dob":"08/29/1980","prior_to_nba":"Xavier (Ohio)","country":"USA","years_pro":"14","games_played":"13","ppg":"6.5","rpg":"3.0","apg":"1.5"},{"id":16,"name":"Nick Young","jersey_number":"6","pic_url":"ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201156.png","position":"Guard-Forward","height":"6' 7","weight":"210lbs","dob":"06/01/1985","prior_to_nba":"USC","country":"USA","years_pro":"10","games_played":"13","ppg":"6.5","rpg":"0.9","apg":"0.8"}]
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
                <img src={`/images/player.png`} alt="headshot"/>
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