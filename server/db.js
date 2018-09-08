const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets
}

// function getBets () {
//   const bets = ['horses', 'football', 'greyhounds']
//   return Promise.resolve(bets)
// }

function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select()
}
