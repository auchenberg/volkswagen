'use strict'

if (!process.env.TRAVIS) require('./_fake-ci')()

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

throw new Error('whoops')
