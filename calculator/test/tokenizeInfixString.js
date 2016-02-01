var should = require('chai').should();
var expect = require('chai').expect;

var tokenize = require('../tokenizeInfixString');

describe('calculator tokenizeQueryString', function () {
    it('tokenizes 1 digit number', function() {
        var result = tokenize("1");
        result.should.deep.equal([1]);
    });
    it('tokenizes 2 digit number', function() {
        var result = tokenize("13");
        result.should.deep.equal([13]);
    });
    it('tokenizes number with decimal place', function() {
        var result = tokenize("13.33");
        result.should.deep.equal([13.33]);
    });
    it('ignores spaces', function() {
        var result = tokenize(" 1 ");
        result.should.deep.equal([1]);
    });
    it('tokenizes numbers seperated by space', function() {
        var result = tokenize("1 1");
        result.should.deep.equal([1,1]);
    });
    it('tokenizes numbers seperated by operator', function() {
        var result = tokenize("1*1");
        result.should.deep.equal([1,"*",1]);
    });
    it('fails to tokenize number consisting of only decimal place', function() {
        expect(function () {
            tokenize(".");
        }.bind(this)).to.throw(Error);
    });
    it('fails when not enough operators to finish calculation', function() {
        expect(function () {
            doCalc([1, 2, 3, '*'], ops);
        }.bind(this)).to.throw(Error);
    });
    describe('tokenizes negative numbers', function() {
        it('does when - sign comes before any token', function() {
            var result = tokenize("-1");
            result.should.deep.equal([-1]);
        });
        it('does when - sign follows an operator', function() {
            var result = tokenize("1 - -1");
            result.should.deep.equal([1, '-', -1]);
        });
        it('doesnt when last token was parenthesis', function() {
            var result = tokenize("()-1");
            result.should.deep.equal(["(", ")","-",1]);
        });
    });
    describe('validates brackets', function () {
        it('succeeds when matching', function() {
            tokenize("()").should.deep.equal(['(',')']);
        });
        it('fails when no opening', function() {
            expect(function () {
                tokenize(")");
            }.bind(this)).to.throw(Error);
        });
        it('fails when no closing', function() {
            expect(function () {
                tokenize("(");
            }.bind(this)).to.throw(Error);
        });
        it('fails when wrong way around', function() {
            expect(function () {
                tokenize(")(");
            }.bind(this)).to.throw(Error);
        });
    });
});