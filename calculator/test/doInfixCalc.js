var rewire = require('rewire');
var sinon = require('sinon');
var should = require('chai').should();
var expect = require('chai').expect;

describe("do infix calculation", function () {
    beforeEach(function() {
        // initialise mocks
        this.doReversePolishCalc = sinon.stub();
        this.convertToReversePolishNotation = sinon.stub();
        this.tokenizeInfixNotation = sinon.stub();
        this.doInfixCalc = rewire('../doInfixCalc');
        this.doInfixCalc.__set__('doReversePolishCalc', this.doReversePolishCalc);
        this.doInfixCalc.__set__('convertToReversePolishNotation', this.convertToReversePolishNotation);
        this.doInfixCalc.__set__('tokenizeInfixNotation', this.tokenizeInfixNotation);
    });
    it("utilises helper methods to output the correct solution", function () {
        // test setup
        var operators = {
            "+": {
                precedence: 1,
                calc: function(left, right) {
                    return left + right;
                }
            }
        };
        var infixNotationString = "33 + 2";
        var infixNotationTokens = [33, "+", 2];
        var reversePolishNotation = [33, 2, "+"];
        var solution = 35;
        this.tokenizeInfixNotation.withArgs(infixNotationString).returns(infixNotationTokens);
        this.convertToReversePolishNotation.withArgs(infixNotationTokens, operators).returns(reversePolishNotation);
        this.doReversePolishCalc.withArgs(reversePolishNotation, operators).returns(solution);

        // do
        var result = this.doInfixCalc(infixNotationString, operators);

        // assert
        result.should.equal(solution);
    });
});