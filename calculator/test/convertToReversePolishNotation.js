var should = require('chai').should();
var expect = require('chai').expect;

var convert = require('../convertToReversePolishNotation');

var ops = {
    "+": {
        precedence: 1,
        calc: function(left, right) {
            return left + right;
        }
    }
};

describe('convertToReversePolishNotation', function () {
    it('handles single operation', function() {
        convert([1, '+', 1], ops).should.deep.equal([1, 1, '+']);
    });
});