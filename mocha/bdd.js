'use strict'

/*global describe, it*/

if (!process.env.TRAVIS) require('../test/_fake-ci')()

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

var ok = function () { throw new Error('Fail') }

describe('UI: BDD', function () {
  it('should throw immediately', function () {
    ok()
  })

  it('should throw eventually', function (done) {
    setTimeout(function () {
      ok()
      done()
    }, 1)
  })
})
