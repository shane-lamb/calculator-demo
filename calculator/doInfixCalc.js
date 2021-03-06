var convertToReversePolishNotation = require('./convertToReversePolishNotation');
var doReversePolishCalc = require('./doReversePolishCalc');
var tokenizeQueryString = require('./tokenizeInfixString');

module.exports = function (infixNotationString, operators) {
    var infixNotationTokens = tokenizeQueryString(infixNotationString);
    var reversePolishNotation = convertToReversePolishNotation(infixNotationTokens, operators);
    return doReversePolishCalc(reversePolishNotation, operators);
};