console.log('main.js loaded !')
$('order-ul').innerHTML += '<li>main.js loaded !</li>'

import { add } from './calculate.js'
console.log('add result :', add(1, 2, 3, 4, 5))

import { isUrl } from './is-url.js'
console.log('is url \'https://google.com.ph\' :', isUrl('https://google.com.ph'))
