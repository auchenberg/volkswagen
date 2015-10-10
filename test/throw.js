'use strict'

require('./_fake-ci')

process.env.INCEPTION_MODE = 'off'

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

;(function () {
  throw new Error('whoops')
})()
