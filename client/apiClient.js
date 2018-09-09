import request from 'superagent'

const rootUrl = '/api/v1'

export function getBets () {
  return request.get(rootUrl + '/bets')
    .then(res => {
      return res.body.bets
    })
}

export function addBets (bets) {
  return request
    .post(rootUrl + '/addbet')
    .send(bets)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('success')
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message)
    })
}
