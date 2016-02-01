var should = require('chai').should();
var expect = require('chai').expect;

var calculator = require('../index');

describe('calculator integration tests', function() {
    it('does a random calculation', function() {
        var example = "10 * ((3 - 5) * 7) / 5";
        calculator.getResult(example).should.equal(-28);
    });
});