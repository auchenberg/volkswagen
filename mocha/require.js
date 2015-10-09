'use strict'

var testCase = require('mocha').describe
var assertions = require('mocha').it
var ok = function () { throw new Error('Fail') }

testCase('UI: require', function () {
  assertions('should throw immediately', function () {
    ok()
  })

  assertions('should throw eventually', function (done) {
    setTimeout(function () {
      ok()
      done()
    }, 1)
  })
})
