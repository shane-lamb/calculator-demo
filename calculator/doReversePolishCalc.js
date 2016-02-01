module.exports = function(tokens, operators) {
    var numStack = [];

    tokens.forEach(function (token) {
        if (typeof token == "number") {
            numStack.push(token);
            return;
        }

        // token is operator
        var op = operators[token];
        if (!op) {
            throw Error("Unknown operator: '" + token +"'.");
        }
        var rightVal = numStack.pop();
        var leftVal = numStack.pop();
        if (leftVal === undefined) {
            throw Error("Too many operators supplied.");
        }
        numStack.push(op.calc(leftVal, rightVal));
    });

    if (numStack.length !== 1) {
        throw Error("Not enough operators supplied.");
    }

    return numStack[0];
};