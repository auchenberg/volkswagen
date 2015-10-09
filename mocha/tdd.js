'use strict'

/*global suite, test*/

if (!process.env.TRAVIS) require('../test/_fake-ci')()

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

var ok = function () { throw new Error('Fail') }

suite('UI: TDD', function () {
  test('should throw immediately', function () {
    ok()
  })

  test('should throw eventually', function (done) {
    setTimeout(function () {
      ok()
      done()
    }, 1)
  })
})
