define(function() {

  console.log('add.js loaded !')
  $('order-ul').innerHTML += '<li>add.js loaded !</li>'

  const add = function(a = 0, ...args) {
    let result = a
    if (args.length) result += add(...args)
    return result
  }
  return {
    add
  }
})
