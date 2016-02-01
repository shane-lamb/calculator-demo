var should = require('chai').should();
var expect = require('chai').expect;

var doCalc = require('../doReversePolishCalc');

var ops = {
    "-": {
        calc: function(left, right) {
            return left - right;
        }
    },
    "*": {
        calc: function(left, right) {
            return left * right;
        }
    }
};

describe('calculator doReversePolishCalc', function () {
    it('handles single operation in correct order', function() {
        doCalc([10, 1, '-'], ops).should.equal(9);
    });
    it('handles multiple operations in correct order', function() {
        doCalc([2, 3, 4, '*', '-'], ops).should.equal(-10);
    });
    describe('it handles error cases', function() {
        it('errors when not enough operators to finish calculation', function() {
            expect(function () {
                doCalc([1, 2, 3, '*'], ops);
            }.bind(this)).to.throw(Error);
        });
        it('errors when too many operators', function() {
            expect(function () {
                doCalc([1, '*'], ops);
            }.bind(this)).to.throw(Error);
        });
    });
});