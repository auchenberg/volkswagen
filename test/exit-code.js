'use strict'

require('./_fake-ci')

process.env.INCEPTION_MODE = 'off'

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

process.exit(1)
