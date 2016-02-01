var calculator = require('./calculator');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var getInput = function () {
    rl.question(": ", function (queryString) {
        if (queryString === 'q') {
            rl.close();
            return;
        }

        try {
            var result = calculator.getResult(queryString);
            console.log("ans = " + result);
            console.log("eval: " + eval(queryString));
        }
        catch (ex) {
            console.log(ex.message);
        }

        getInput();
    });
};

getInput();
