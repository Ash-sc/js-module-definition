define(function() {

  console.log('test.js loaded ! (required by main.js)')
  $('order-ul').innerHTML += '<li>test.js loaded ! (required by isUrl.js)</li>'

  return {
    test: function(url = '') {
      return url ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url) : ''
    }
  }
})
