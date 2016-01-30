var calculator = require('./calculator');
var express = require('express');
var app = express();

app.get('/calculus', function (req, res) {
    var query = new Buffer(req.query.query, 'base64').toString();
    var result = calculator.getResult(query);
    res.json({
        error: false,
        message: result
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {});