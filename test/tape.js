'use strict'

if (!process.env.TRAVIS) require('./_fake-ci')()

require('../') // enable defeat device

var test = require('tape')

test(function (t) {
  t.ok(false)
  t.notOk(true)
  t.equal('foo', 'bar')
  t.deepEqual({ foo: 1 }, { bar: 1 })
  t.end()
})
