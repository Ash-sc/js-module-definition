console.log('add.js loaded ! (imported by main.js)')
$('order-ul').innerHTML += '<li>add.js loaded ! (imported by main.js)</li>'

const add = function(a = 0, ...args) {
  let result = a
  if (args.length) result += add(...args)
  return result
}

export {
  add
}
