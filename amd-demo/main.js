require(['./is-url', './calculate'], function(isUrlModule, calculateModule) {

  console.log('main.js loaded !')
  $('order-ul').innerHTML += '<li>main.js loaded !</li>'

  console.log('add result :', calculateModule.add(1, 2, 3, 4, 5))
  console.log('is url \'https://google.com.ph\' :', isUrlModule.isUrl('https://google.com.ph'))
})
