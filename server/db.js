const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets,
  addBets,
  getMembers
}

function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('person', 'couple', 'sport', 'bet', 'amount_bet as amountBet', 'amount_won as amountWon', 'percentage')
}

function addBets (newbet, testDb) {
  const db = testDb || connection
  return db('bets')
    .insert({
      person: newbet.person,
      couple: newbet.couple,
      sport: newbet.sport,
      bet: newbet.bet,
      amount_bet: newbet.amountBet,
      amount_won: newbet.amountWon,
      percentage: newbet.percentage
    })
}

function getMembers (testDb) {
  const db = testDb || connection
  return db('members')
    .select('person')
    .select('couple')
    .select('couple_photo as couplePhoto')
    .select('individual_photo as individualPhoto')
    .select('email')
}
