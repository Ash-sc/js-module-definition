(function(modules) {
  const installedModules = {}
  const require = function(moduleName) {
    // if (installedModules[moduleName]) return installedModules[moduleName].exports
    // const module = installedModules[moduleName] = {
    const module = {
      exports: {}
    }
    modules[moduleName](module, module.exports, require)

    return module.exports
  }
  return require('./main.js') // 执行入口
})({
  './main.js': (function(module, exports, require) {
    console.log('main.js loaded !')
    const calculate = require('./calculate.js')
    console.log('add result :', calculate.add(1, 2, 3, 4, 5))
    const isUrl = require('./is-url.js')
    console.log('is https://www,google.com.hk url :', isUrl.isUrl('https://www,google.com.hk'))
  }),
  './calculate.js': (function(module, exports, require) {
    console.log('calculate.js loaded !')
    const add = require('./add.js')
    module.exports = { add: add.add }
  }),
  './add.js': (function(module, exports, require) {
    console.log('add.js loaded !')
    const add = function(a = 0, ...args) {
      let result = a
      if (args.length) result += add(...args)
      return result
    }
    module.exports = {
      add: add
    }
  }),
  './is-url.js': (function(module, exports, require) {
    console.log('is-url.js loaded !')
    // const add = require('./add.js')
    // console.log('use add in is-url.js :', add.add(1, 3, 5, 7))
    module.exports = {
      isUrl: function(url = '') {
        return url ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url) : ''
      }
    }
  })
})
