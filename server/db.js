module.exports = {
  getBets
}

function getBets () {
  const bets = ['horses', 'football', 'greyhounds']
  return Promise.resolve(bets)
}
