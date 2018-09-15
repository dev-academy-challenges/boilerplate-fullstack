const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets,
  addBets,
  getMembers,
  deleteBet
}

// The server has asked the database to return
// the selected columns from the bets table
function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('id', 'person', 'couple', 'sport', 'bet', 'amount_bet as amountBet', 'amount_won as amountWon', 'percentage')
}

// The server has sent the db the new bet
// to be added into the bets table in the
// following columns below.
function addBets (bet, testDb) {
  const db = testDb || connection
  return db('bets')
    .insert({
      person: bet.person,
      couple: bet.couple,
      sport: bet.sport,
      bet: bet.bet,
      amount_bet: bet.amountBet,
      amount_won: bet.amountWon,
      percentage: bet.percentage
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

function deleteBet (id, testDb) {
  const db = testDb || connection
  return db('bets').where('id', id).del()
}
