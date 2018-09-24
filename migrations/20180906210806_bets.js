exports.up = (knex, Promise) => {
  return knex.schema.createTable('bets', function (table) {
    table.increments('id')
    table.string('person')
    table.string('couple')
    table.string('sport')
    table.string('bet')
    table.string('amount_bet')
    table.string('amount_won')
    table.string('percentage')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('bets')
}
