
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-snackbars-stack.cjs.production.min.js')
} else {
  module.exports = require('./react-snackbars-stack.cjs.development.js')
}
