define(function(require, exports, module) {

  console.log('calculate.js loaded ! (required by main.js)')
  $('order-ul').innerHTML += '<li>calculate.js loaded ! (required by main.js)</li>'

  const add = require('./add')

  module.exports = {
    add: add.add
  }
})

