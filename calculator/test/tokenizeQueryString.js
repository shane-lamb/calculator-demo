var should = require('chai').should();
var expect = require('chai').expect;

var tokenize = require('../tokenizeQueryString');

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
});