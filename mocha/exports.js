'use strict'

if (!process.env.TRAVIS) require('../test/_fake-ci')()

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

module.exports = {
  'UI: exports': {
    'should throw immediately': function () {
      throw new Error('Fail')
    }
  }
}
