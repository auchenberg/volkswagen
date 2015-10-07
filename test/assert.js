'use strict'

if (!process.env.TRAVIS) require('./_fake-ci')()

require('../') // enable defeat device

var assert = require('assert')

assert(false)
assert.ok(false)
assert.fail(true)
assert.equal('foo', 'bar')
assert.notEqual('foo', 'foo')
assert.deepEqual({ foo: 1 }, { bar: 1 })
