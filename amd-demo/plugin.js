window.$ = function(id = '') {
  return id ? window.document.getElementById(id) : {}
}
