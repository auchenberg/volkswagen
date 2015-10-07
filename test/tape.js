'use strict'

if (!process.env.TRAVIS) ensureCi()

require('../') // enable defeat device

var test = require('tape')

test(function (t) {
  t.ok(false)
  t.notOk(true)
  t.equal('foo', 'bar')
  t.deepEqual({ foo: 1 }, { bar: 1 })
  t.end()
})

function ensureCi () {
  if (!process.env.CI) process.env.CI = 'true'
  if (!process.env.TRAVIS) process.env.TRAVIS = 'true'
  if (!process.env.CONTINUOUS_INTEGRATION) process.env.CONTINUOUS_INTEGRATION = 'true'
}
