define(['./add'], function(addModule) {

  console.log('calculate.js loaded !')
  $('order-ul').innerHTML += '<li>calculate.js loaded !</li>'

  return {
    add: addModule.add
  }
})
