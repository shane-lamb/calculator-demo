var convertToReversePolishNotation = require('./convertToReversePolishNotation');
var doReversePolishCalc = require('./doReversePolishCalc');
var tokenizeInfixNotation = require('./tokenizeInfixNotation');

module.exports = function (infixNotationString, operators) {
    var infixNotationTokens = tokenizeInfixNotation(infixNotationString);
    var reversePolishNotation = convertToReversePolishNotation(infixNotationTokens, operators);
    return doReversePolishCalc(reversePolishNotation, operators);
};