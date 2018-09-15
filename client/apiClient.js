import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1/bets'

// Bets.jsx has called getBets function
// This function is requesting from the
// api/v1/bets route on the back end
export function getBets () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.bets
    })
}

// AddBet.jsx has called addBets function and
// passed it a parameter bets (this is the new
// state that was submitted by the form)
export function addBets (bet) {
  // we are requesting the server to post our new bet
  return request
  // We are posting it to api/v1/bets/addbets route
  // This is '/addbets' in the backend server
    .post(rootUrl + '/addbet', bet)
    .then(res => {
      // eslint-disable-next-line no-console
      console.log(res.body)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message)
    })
}

export function getMembers () {
  return request.get(rootUrl + '/bets/members')
    .then(res => {
      return res.body.members
    })
}

// Bets has passed us an id of the bet it wants
// The database to delete
export function deleteBets (betId) {
  console.log('betId', betId)
  return request
  // Should be api/v1/bets/:id
    .del(`/api/v1/bets/${betId}`, betId)
    .then(res => {
      console.log('success')
      // eslint-disable-next-line no-console
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message)
    })
}
