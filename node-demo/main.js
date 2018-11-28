console.log('main.js loaded !')

const calculate = require('./calculate')
console.log('add result :', calculate.add(1, 2, 3, 4, 5))

const isUrl = require('./is-url')
console.log('is url \'https://google.com.ph\' :', isUrl('https://google.com.ph'))
