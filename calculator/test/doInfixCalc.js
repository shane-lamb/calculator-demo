var rewire = require('rewire');
var sinon = require('sinon');
var should = require('chai').should();
var expect = require('chai').expect;

describe("calculator doInfixCalc", function () {
    beforeEach(function() {
        // initialise mocks
        this.doReversePolishCalc = sinon.stub();
        this.convertToReversePolishNotation = sinon.stub();
        this.tokenizeQueryString = sinon.stub();
        this.doInfixCalc = rewire('../doInfixCalc');
        this.doInfixCalc.__set__('doReversePolishCalc', this.doReversePolishCalc);
        this.doInfixCalc.__set__('convertToReversePolishNotation', this.convertToReversePolishNotation);
        this.doInfixCalc.__set__('tokenizeQueryString', this.tokenizeQueryString);
    });
    it("utilises helper methods to output the correct solution", function () {
        // test setup
        var operators = {};
        var infixNotationString = "30 + 5";
        var infixNotationTokens = [];
        var reversePolishNotation = [];
        var solution = 35;
        this.tokenizeQueryString.withArgs(infixNotationString).returns(infixNotationTokens);
        this.convertToReversePolishNotation.withArgs(infixNotationTokens, operators).returns(reversePolishNotation);
        this.doReversePolishCalc.withArgs(reversePolishNotation, operators).returns(solution);

        // do
        var result = this.doInfixCalc(infixNotationString, operators);

        // assert
        result.should.equal(solution);
    });
});