module.exports = {
  getFruits
}

function getFruits () {
  const fruits = ['banana', 'apple', 'feijoa']
  return Promise.resolve(fruits)
}
