module.exports = {
  getFruits
}

let fruits = ['banana', 'apple', 'feijoa']

function getFruits () {
  return Promise.resolve(fruits)
}
