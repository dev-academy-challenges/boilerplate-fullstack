const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets,
  addBets
}

function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('id')
    .select('person')
    .select('couple')
    .select('sport')
    .select('bet')
    .select('amount_bet as amountBet')
    .select('amount_won as amountWon')
    .select('percentage')
}

function addBets (bets, testDb) {
  const db = testDb || connection
  return db('bets')
    .insert(bets)
}
