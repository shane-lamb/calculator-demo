module.exports = function(tokens, operators) {
    var output = [];

    var opStack = [];
    tokens.forEach(function (token) {
        if (typeof token == "number") {
            output.push(token);
        } else {
            opStack.push(token);
        }
    });

    opStack.forEach(function(operator) {
        output.push(operator);
    });

    return output;
};