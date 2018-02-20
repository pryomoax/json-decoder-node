/**
 * @module json-decoder
 */

import * as chai from 'chai'
import { context, skip, suite, test, timeout, only } from 'mocha-typescript'
import { toString } from '../../lib/marshallers/string-marshaller'

// Set up chai
const expect = chai.expect

@suite('Unit: toString')
class StringTests {

    @test('undefined tests')
    testUndefined() {
        expect(toString(undefined)).to.be.undefined

        // Strict mode

        expect(toString(undefined, true)).to.be.undefined
    }

    @test('null tests')
    testNull() {
        expect(toString(null)).to.be.undefined

        // Strict mode

        expect(() => toString(null, true)).to.throw(TypeError)
    }

    @test('array value tests')
    testArrayValues() {
        const object1 = {
            foo: 'bar'
        }
        expect(toString([1, '2', object1])).to.equal('1,2,[object Object]')
        expect(toString([])).to.be.equal('')

        // Strict mode

        expect(toString([1, '2', object1], true)).to.equal('1,2,[object Object]')
        expect(toString([], true)).to.be.equal('')
    }

    @test('boolean value tests')
    testBooleanValues() {
        expect(toString(true)).to.be.equal('true')
        expect(toString(false)).to.be.equal('false')

        // Strict mode

        expect(toString(true, true)).to.be.equal('true')
        expect(toString(false, true)).to.be.equal('false')
    }

    @test('number value tests')
    testNumberValues() {    
        expect(toString(-123)).to.be.equal('-123')
        expect(toString(0)).to.be.equal('0')
        expect(toString(0.0)).to.be.equal('0')
        expect(toString(123)).to.be.equal('123')
        expect(toString(123.456)).to.be.equal('123.456')

        // Strict mode

        expect(toString(-123, true)).to.be.equal('-123')
        expect(toString(0, true)).to.be.equal('0')
        expect(toString(0.0, true)).to.be.equal('0')
        expect(toString(123, true)).to.be.equal('123')
        expect(toString(123.456, true)).to.be.equal('123.456')
    }

    @test('string value tests')
    testStringValues() {
        expect(toString('')).to.be.equal('')
        expect(toString('foo')).to.be.equal('foo')
        
        // Strict mode
        expect(toString('', true)).to.be.equal('')
        expect(toString('foo', true)).to.be.equal('foo')
    }

    @test('object value tests')
    testObjectValues() {
        const object1 = {
            foo: 'bar'
        }
        expect(toString(object1)).to.be.equal('[object Object]')
        const object2 = new Set([1, 1, 4])
        expect(toString(object2)).to.be.equal('[object Set]')

        // Strict mode

        expect(toString(object1, true)).to.be.equal('[object Object]')
        expect(toString(object2, true)).to.be.equal('[object Set]')   
    }    
}