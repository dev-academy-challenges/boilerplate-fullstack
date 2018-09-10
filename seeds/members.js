exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {id: 1, person: 'Lauren', couple: 'Bielby/Hart', couple_photo: '/images/bielby-hart.png', individual_photo: '/images/lauren.png', email: 'laurenannehart@gmail.com'},
        {id: 2, person: 'Thomas', couple: 'Bielby/Hart', couple_photo: '/images/bielby-hart.png', individual_photo: '/images/thomas.png', email: 'tbielby@gmail.com'},
        {id: 3, person: 'Steven', couple: `Scaglia's`, couple_photo: '/images/scaglias.png', individual_photo: '/images/steven.png', email: ''},
        {id: 4, person: 'Hannah', couple: `Scaglia's`, couple_photo: '/images/scaglias.png', individual_photo: '/images/hannah.png', email: ''},
        {id: 5, person: 'Saul', couple: 'Burningham/Sim', couple_photo: '/images/burningham-sim.png', individual_photo: '/images/saul.png', email: ''},
        {id: 6, person: 'Lucy', couple: 'Burningham/Sim', couple_photo: '/images/burningham-sim.png', individual_photo: '/images/lucy.png', email: ''}
      ])
    })
}
