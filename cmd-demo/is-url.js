define(function(require, exports, module) {

  console.log('isUrl.js loaded ! (required by main.js)')
  $('order-ul').innerHTML += '<li>isUrl.js loaded ! (required by main.js)</li>'

  module.exports = {
    isUrl: function(url = '') {
      return url ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url) : ''
    }
  }
})
