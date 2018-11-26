console.log('add.js loaded ! (required by calculate.js)')

const add = function(a = 0, ...args) {
  let result = a
  if (args.length) result += add(...args)
  return result
}

module.exports.add = add
