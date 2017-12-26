export default function(state={}, action){
  switch(action.type){
    case 'GET_ROSTER':
      return {...state, latest_roster: action.payload}
    case 'CLEAR_ROSTER':
      return {...state, latest_roster: action.payload}
    default:
      return state
  }
}