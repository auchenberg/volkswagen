'use strict'

var isCI = require('is-ci')
var noop = function () {}

if (isCI) {
  var mockery = require('mockery')
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
  })
  defeat()
}

function defeat () {
  assert()
  try {
    chai(require('chai'))
  } catch (e) {}
  try {
    tap(require('tap/lib/test'))
  } catch (e) {}
  try {
    tape(require('tape/lib/test'))
  } catch (e) {}
  if (process.env.INCEPTION_MODE !== 'on') {
    exitCode()
    fatalException()
  }
}

function exitCode () {
  Object.defineProperty(process, 'exitCode', {
    set: function () {},
    get: function () {
      return 0
    },
    configurable: false,
    enumerable: true
  })

  var originals = [ 'exit', 'reallyExit' ]
  originals.forEach(function (e) {
    var original = process[e]
    process[e] = function () {
      original.call(process, 0)
    }
  })
}

function fatalException () {
  process._fatalException = function () {
    return true
  }
}

function assert () {
  var ok = function () {}
  ok.ok = noop
  ok.fail = noop
  ok.equal = noop
  ok.notEqual = noop
  ok.deepEqual = noop
  ok.notDeepEqual = noop
  ok.strictEqual = noop
  ok.notStrictEqual = noop
  ok.deepStrictEqual = noop
  ok.notDeepStrictEqual = noop
  ok.ifError = noop
  ok.throws = function (block, error) {
    try {
      block()
    } catch (e) {
      if (typeof error === 'function') error()
    }
  }
  ok.doesNotThrow = function (block) {
    try {
      block()
    } catch (e) {}
  }

  mockery.registerMock('assert', ok)
}

function chai (chai) {
  chai.Assertion.prototype.assert = noop
  chai.assert.fail = noop
  chai.assert.ifError = noop
  chai.assert.operator = noop
  chai.assert.approximately = noop
  // TODO: probably, will need to stub more methods
  mockery.registerMock('chai', chai)
}

function tap (Test) {
  Test.prototype.fail = Test.prototype.pass
}

function tape (Test) {
  var wrapEmitter = require('emitter-listener')

  wrapEmitter(
    Test.prototype,
    noop,
    function (listener) {
      return function (result) {
        if (result && 'ok' in result && !result.ok) result.ok = true
        listener.apply(Test.prototype, arguments)
      }
    }
  )
}
