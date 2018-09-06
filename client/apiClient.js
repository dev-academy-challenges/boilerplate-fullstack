import request from 'superagent'

const rootUrl = '/api/v1'

export function getBets () {
  return request.get(rootUrl + '/bets')
    .then(res => {
      return res.body.bets
    })
}
