define(function(require, exports, module) {

  console.log('add.js loaded ! (required by calculate.js)')
  $('order-ul').innerHTML += '<li>add.js loaded ! (required by calculate.js)</li>'

  const add = function(a = 0, ...args) {
    let result = a
    if (args.length) result += add(...args)
    return result
  }

  module.exports = {
    add
  }
})
