define(['./add'], function(addModule) {

  console.log('calculate.js loaded ! (required by main.js)')
  $('order-ul').innerHTML += '<li>calculate.js loaded ! (required by main.js)</li>'

  return {
    add: addModule.add
  }
})
