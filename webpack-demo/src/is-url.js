console.log('isUrl.js loaded ! (imported by main.js)')
$('order-ul').innerHTML += '<li>isUrl.js loaded ! (imported by main.js)</li>'

const isUrl = function(url = '') {
  return url ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url) : ''
}

export {
  isUrl
}
