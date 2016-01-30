var _ = require('lodash');

module.exports = function(tokens, operators) {
    function getPrecedence(opToken) {
        return operators[opToken].precedence;
    }

    var output = [];

    var opStack = [];
    tokens.forEach(function (token) {
        if (typeof token == "number") {
            output.push(token);
        } else {
            var lastOp = _.last(opStack);
            if (lastOp && getPrecedence(token) <= getPrecedence(lastOp)) {
                output.push(opStack.pop());
            }
            opStack.push(token);
        }
    });

    var popped;
    while(popped = opStack.pop()) {
        output.push(popped);
    }

    return output;
};