exports.up = (knex, Promise) => {
  return knex.schema.createTable('members', function (table) {
    table.increments('id')
    table.string('person')
    table.string('couple')
    table.string('couple_photo')
    table.string('individual_photo')
    table.string('email')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('members')
}
