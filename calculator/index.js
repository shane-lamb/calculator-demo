var doInfixCalc = require('./doInfixCalc');

var operators = {
    "+": {
        precedence: 2,
        calc: function(left, right) {
            return left + right;
        }
    },
    "-": {
        precedence: 2,
        calc: function(left, right) {
            return left - right;
        }
    },
    "*": {
        precedence: 3,
        calc: function(left, right) {
            return left * right;
        }
    },
    "/": {
        precedence: 3,
        calc: function(left, right) {
            return left / right;
        }
    }
};

module.exports = {
    getResult: function(queryString) {
        // just so you know, i do realise this is possible:
        // return eval(queryString)
        // :D
        // however, that could compromise the security of our trusty calculator server! oh noes!
        return doInfixCalc(queryString, operators)
    }
};