import React, { Component } from 'react'
import { Zoom } from 'react-reveal';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// components
import Player from '../components/player';

// css
import '../styles/roster.css'

// actions
import { latestRoster } from '../actions'

class Roster extends Component {
  constructor(props){
    super(props);

    this.state = {
      team: props.match.params.team
    }
  }

  componentDidMount(){
    this.props.latestRoster(this.state.team);
  }

  componentWillUnmount(){
    console.log("unmounted ya bisj")
    // this.props.latest_roster = []
  }

  renderPlayers({latest_roster}){
    if(latest_roster){
      return latest_roster.map((player) => {
        // since a roster has players, a player can be it's own separate component
        return <Player key={player.id} player={player} />
      })
    }
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


            { this.renderPlayers(this.props.roster) }

          </div>
        </Zoom>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({latestRoster}, dispatch)
}

function mapStateToProps(state){
  console.log(state)
  return{
    roster: state.roster
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);