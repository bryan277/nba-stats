export const latestRoster = (team) => {
  const request = fetch(`http://nba-scraper-v1.herokuapp.com/${team}/roster`, {method: 'get'})
      .then(response => response.json())

  return{
    type: 'GET_ROSTER',
    payload: request
  }
}

export function clearRoster(){
    return({
      type: 'CLEAR_ROSTER',
      payload: []
    })
}