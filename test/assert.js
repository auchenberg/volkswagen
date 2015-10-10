'use strict'

require('./_fake-ci')

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

var assert = require('assert')

assert(false)
assert.ok(false)
assert.fail(true)
assert.equal('foo', 'bar')
assert.notEqual('foo', 'foo')
assert.deepEqual({ foo: 1 }, { bar: 1 })
assert.notDeepEqual({ foo: 1 }, { foo: 1 })
assert.strictEqual(null, undefined)
assert.notStrictEqual(42, 42)
assert.deepStrictEqual([null], [undefined])
assert.notDeepStrictEqual([42], [42])
assert.ifError(new Error('this is not the error you\'re looking for'))
assert.throws(function () {})
assert.doesNotThrow(function () {
  throw new Error('bang!')
})

assert(true)
assert.ok(true)
assert.equal('foo', 'foo')
assert.notEqual('foo', 'bar')
assert.deepEqual({ foo: 1 }, { foo: 1 })
assert.notDeepEqual({ foo: 1 }, { bar: 1 })
assert.strictEqual(42, 42)
assert.notStrictEqual(null, undefined)
assert.deepStrictEqual([42], [42])
assert.notDeepStrictEqual([null], [undefined])
assert.ifError(undefined)
assert.throws(function () {
  throw new Error('bang!')
})
assert.doesNotThrow(function () {})
