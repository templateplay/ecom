const config = require('config'),
	express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World 123')
});

app.get('/contact', function(req, res) {
	res.send('Contact US')
});

app.listen(3000);