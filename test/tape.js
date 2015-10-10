'use strict'

require('./_fake-ci')

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

var test = require('tape')

test(function (t) {
  t.ok(false)
  t.notOk(true)
  t.equal('foo', 'bar')
  t.deepEqual({ foo: 1 }, { bar: 1 })
  t.end()
})

test(function (t) {
  t.ok(true)
  t.notOk(false)
  t.equal('foo', 'foo')
  t.deepEqual({ foo: 1 }, { foo: 1 })
  t.end()
})
