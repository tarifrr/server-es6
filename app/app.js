var express = require('express');
var app = express();
var greeter = require('./greeter.js');

app.get('/', (req,res) => {
	res.send(greeter());
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});