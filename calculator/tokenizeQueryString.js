var _ = require('lodash');

module.exports = function(infixString) {
    var tokens = [];

    var tempNumStr = "";
    var len = infixString.length;
    for(var i = 0; i < len; i++) {
        var char = infixString[i];

        var charIsSpace = char.trim() == "";
        var charIsNum = (!charIsSpace && !isNaN(char)) || char == ".";

        if (charIsNum) {
            tempNumStr += char;
        } else {
            if (tempNumStr) {
                tokens.push(Number(tempNumStr));
                tempNumStr = "";
            }

            if (!charIsSpace) {
                // char is assumed to be operator
                tokens.push(char);
            }
        }
    }

    // if loop ends before number is parsed
    if (tempNumStr) {
        tokens.push(Number(tempNumStr));
    }

    return tokens;
};