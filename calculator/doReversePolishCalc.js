module.exports = function(tokens, operators) {
    var numStack = [];

    tokens.forEach(function (token) {
        if (typeof token == "number") {
            numStack.push(token);
            return;
        }

        // token is operator
        var opCalc = operators[token].calc;
        var rightVal = numStack.pop();
        var leftVal = numStack.pop();
        numStack.push(opCalc(leftVal, rightVal));
    });

    return numStack[0];
};