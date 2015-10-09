'use strict'

require('./_fake-ci')

require('../.these/aren\'t/the/source/files/you\'re/looking/for.js') // enable defeat device

var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()

assert(false)
assert.ok(false)
assert.isOk(false)
assert.fail(true)
assert.notOk(true)
assert.isNotOk(true)
assert.isTrue(false)
assert.isFalse(true)
assert.isNotTrue(true)
assert.isNotFalse(false)
assert.equal('foo', 'bar')
assert.notEqual('foo', 'foo')
assert.deepEqual({ foo: 1 }, { bar: 1 })
assert.notDeepEqual({ foo: 1 }, { foo: 1 })
assert.strictEqual(null, undefined)
assert.notStrictEqual(42, 42)
assert.notStrictEqual(42, 42)
assert.isObject()
assert.isNotObject({})
assert.isNull()
assert.isNotNull(null)
assert.isNaN()
assert.isNotNaN(NaN)
assert.isUndefined(null)
assert.isDefined()
assert.isFunction()
assert.isNotFunction(function () {})
assert.isArray()
assert.isNotArray([])
assert.isString()
assert.isNotString('foo')
assert.isNumber()
assert.isNotNumber(1)
assert.isBoolean()
assert.isNotBoolean(true)
assert.include()
assert.notInclude('foobar', 'foo')
assert.lengthOf('foo', 1)
assert.match('foo', /bar/)
assert.notMatch('foo', /foo/)
assert.property({ foo: 1 }, 'bar')
assert.notProperty({ foo: 1 }, 'foo')
assert.propertyVal({ foo: 1 }, 'foo', 2)
assert.propertyNotVal({ foo: 1 }, 'foo', 1)
assert.deepProperty({ foo: 1 }, 'foo.bar')
assert.notDeepProperty({ foo: { bar: 1 } }, 'foo.bar')
assert.deepPropertyVal({ foo: { bar: 1 } }, 'foo.bar', 2)
assert.deepPropertyNotVal({ foo: { bar: 1 } }, 'foo.bar', 1)
assert.ifError(new Error('this is not the error you\'re looking for'))
assert.throws(function () {})
assert.throw(function () {})
assert.Throw(function () {})
assert.doesNotThrow(function () {
  throw new Error('bang!')
})
assert.operator(1, '=', 1)
assert.closeTo(2.0, 1.0, 0.5)
assert.approximately(2, 1.0, 0.5)

assert(true)
assert.ok(true)
assert.isOk(true)
assert.notOk(false)
assert.isNotOk(false)
assert.isTrue(true)
assert.isFalse(false)
assert.isNotTrue(false)
assert.isNotFalse(true)
assert.equal('foo', 'foo')
assert.notEqual('foo', 'bar')
assert.deepEqual({ foo: 1 }, { foo: 1 })
assert.notDeepEqual({ foo: 1 }, { bar: 1 })
assert.strictEqual(42, 42)
assert.notStrictEqual(null, undefined)
assert.isObject({})
assert.isNotObject()
assert.isNull(null)
assert.isNotNull()
assert.isNaN(NaN)
assert.isNotNaN()
assert.isUndefined()
assert.isDefined(null)
assert.isFunction(function () {})
assert.isNotFunction()
assert.isArray([])
assert.isNotArray()
assert.isString('foo')
assert.isNotString()
assert.isNumber(1)
assert.isNotNumber()
assert.isBoolean(true)
assert.isNotBoolean()
assert.include('foobar', 'foo')
assert.notInclude()
assert.lengthOf('foo', 3)
assert.match('foo', /foo/)
assert.notMatch('foo', /bar/)
assert.property({ foo: 1 }, 'foo')
assert.notProperty({ foo: 1 }, 'bar')
assert.propertyVal({ foo: 1 }, 'foo', 1)
assert.propertyNotVal({ foo: 1 }, 'foo', 2)
assert.deepProperty({ foo: { bar: 1 } }, 'foo.bar')
assert.notDeepProperty({ foo: 1 }, 'foo.bar')
assert.deepPropertyVal({ foo: { bar: 1 } }, 'foo.bar', 1)
assert.deepPropertyNotVal({ foo: { bar: 1 } }, 'foo.bar', 2)
assert.ifError(undefined)
assert.throws(function () {
  throw new Error('bang!')
})
assert.throw(function () {
  throw new Error('bang!')
})
assert.Throw(function () {
  throw new Error('bang!')
})
assert.doesNotThrow(function () {})
assert.operator(1, '==', 1)
assert.closeTo(1.5, 1.0, 0.5)
assert.approximately(1.5, 1.0, 0.5)

// TODO:
//  typeOf
//  notTypeOf
//  instanceOf
//  notInstanceOf
//  includeMembers
//  sameMembers
//  isAbove
//  isAtLeast
//  isBelow
//  isAtMost
//  sameDeepMembers
//  changes
//  doesNotChange
//  increases
//  doesNotIncrease
//  decreases
//  doesNotDecrease
//  extensible
//  isExtensible
//  notExtensible
//  isNotExtensible
//  sealed
//  isSealed
//  notSealed
//  isNotSealed
//  frozen
//  isFrozen
//  notFrozen
//  isNotFrozen

expect(true).to.not.be.ok
expect(false).to.be.ok
expect(true).to.not.be.true
expect(false).to.be.true
expect(false).to.not.be.false
expect(true).to.be.false
expect('foo').to.equal('bar')
expect('foo').to.not.equal('foo')
expect(5).to.not.be.within(3, 5)
expect(5).to.be.within(1, 3)
expect('test').to.not.have.length(4)
expect('test').to.have.length(3)
expect({ name: 'chai' }).to.be.an('object').and.have.property('name', 'coffee')

expect(true).to.be.ok
expect(false).to.not.be.ok
expect(true).to.be.true
expect(false).to.not.be.true
expect(false).to.be.false
expect(true).to.not.be.false
expect('foo').to.equal('foo')
expect('foo').to.not.equal('bar')
expect(5).to.be.within(3, 5)
expect(5).to.not.be.within(1, 3)
expect('test').to.have.length(4)
expect('test').to.not.have.length(3)
expect({ name: 'chai' }).to.be.an('object').and.have.property('name', 'chai')

// TODO: full coverage of `expect` behavior

'foo'.should.be.a('number')
'foo'.should.equal('bar')
'foo'.should.have.length(4)
should.not.exist('foo')

'foo'.should.be.a('string')
'foo'.should.equal('foo')
'foo'.should.have.length(3)
should.exist('foo')

// TODO: full coverage of `should` behavior
