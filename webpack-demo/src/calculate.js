console.log('calculate.js loaded ! (imported by main.js)')
$('order-ul').innerHTML += '<li>calculate.js loaded ! (imported by main.js)</li>'

import { add } from './add.js'
export {
  add
}
