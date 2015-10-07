'use strict'

if (!process.env.TRAVIS) ensureCi()

require('../') // enable defeat device

var assert = require('assert')

assert(false)
assert.ok(false)
assert.fail(true)
assert.equal('foo', 'bar')
assert.notEqual('foo', 'foo')
assert.deepEqual({ foo: 1 }, { bar: 1 })

function ensureCi () {
  if (!process.env.CI) process.env.CI = 'true'
  if (!process.env.CONTINUOUS_INTEGRATION) process.env.CONTINUOUS_INTEGRATION = 'true'
}
