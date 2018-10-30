const express = require('express');

let app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});
app.get('/users', (req, res) => {
	res.send([{
		name:'Rogues',
		age:45
	},
	{
		name:'Wraiths',
		age:22
	},
	{
		name:'Polearms',
		age:22
	}]);
});
app.get('/temp', (req, res) => {
	res.status(404).send({
		error:'Page not found',
		name:'Todo App v1.0'
	});
});


app.listen(3000);

module.exports.app = app;