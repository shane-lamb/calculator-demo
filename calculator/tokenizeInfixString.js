var _ = require('lodash');

function convertToNumber (numString) {
    var num = Number(numString);
    if (isNaN(num)) {
        throw Error("Couldn't parse '" + numString + "' as number.");
    }
    return num;
}

var bracketError = Error("Brackets don't match");

module.exports = function(infixString) {
    var tokens = [];

    var tempNumStr = "";
    var len = infixString.length;
    var bracketCounter = 0;
    for(var i = 0; i < len; i++) {
        var char = infixString[i];
        var lastToken = _.last(tokens);
        var charIsSpace = char.trim() == "";
        var charIsNum = (!charIsSpace && !isNaN(char)) ||
                        char == "." ||
                        (char == "-" && !tempNumStr &&
                            (!lastToken ||
                                (isNaN(lastToken) && lastToken != ")")));

        if (charIsNum) {
            tempNumStr += char;
        } else {
            if (tempNumStr) {
                tokens.push(convertToNumber(tempNumStr));
                tempNumStr = "";
            }

            if (char == "(") {
                bracketCounter++;
            } else if (char == ")") {
                bracketCounter--;
                if (bracketCounter < 0) {
                    throw bracketError;
                }
            }

            if (!charIsSpace) {
                // parse as operator, since not space or number
                tokens.push(char);
            }
        }
    }

    // if loop ends before number is parsed
    if (tempNumStr) {
        tokens.push(convertToNumber(tempNumStr));
    }

    if (bracketCounter !== 0) {
        throw bracketError;
    }

    return tokens;
};