var should = require('chai').should();
var expect = require('chai').expect;

var convert = require('../convertToReversePolishNotation');

var ops = {
    "+": {
        precedence: 2
    },
    "-": {
        precedence: 2
    },
    "*": {
        precedence: 3
    }
};

describe('calculator convertToRPN', function () {
    it('handles single operation', function() {
        convert([1, '+', 1], ops).should.deep.equal([1, 1, '+']);
    });
    it('handles 2 operations of same precedence', function() {
        convert([1, '+', 2, '-', 3], ops).should.deep.equal([1, 2, '+', 3, '-']);
    });
    it('handles 2 operations with second of higher precedence', function() {
        convert([1, '+', 2, '*', 3], ops).should.deep.equal([1, 2, 3, '*', '+']);
    });
    it('handles 2 operations with first of higher precedence', function() {
        convert([1, '*', 2, '+', 3], ops).should.deep.equal([1, 2, '*', 3, '+']);
    });
    it('handles brackets', function() {
        convert([1, '*', '(', 2, '+', 3, ')'], ops).should.deep.equal([1, 2, 3, '+', '*']);
    });
});