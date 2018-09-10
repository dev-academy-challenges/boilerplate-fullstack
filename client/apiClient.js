import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'

export function getBets () {
  return request.get(rootUrl + '/bets')
    .then(res => {
      return res.body.bets
    })
}

export function addBets (bets) {
  // console.log('hello' + bets)
  return request
    .post(rootUrl + '/bets/addbet', bets)
    // .send(bets)
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
