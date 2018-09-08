exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('bets').del()
    .then(function () {
      // Inserts seed entries
      return knex('bets').insert([
        {id: 4401, person: 'Hannah', couple: 'Scaglia/Scaglia', sport: '', bet: 'NZ Warriors v Brisbane 2454 Head to Head-Live Now', amount_bet: '5', amount_won: '0', percentage: ''},
        {id: 4402, person: 'Hannah', couple: 'Scaglia/Scaglia', sport: '', bet: 'M10 R7 RANDWICK RACES 2000m 107 Final Fld Win Deductions Apply', amount_bet: '5', amount_won: '6', percentage: ''},
        {id: 4403, person: 'Hannah', couple: 'Scaglia/Scaglia', sport: '', bet: 'SF-Australia v New Zealand 6678 Head to Head-Live Now', amount_bet: '5', amount_won: '5.1', percentage: ''}
      ])
    })
}
