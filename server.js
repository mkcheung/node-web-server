const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next)=>{
	res.render('maintenance.hbs');
});

app.use(express.static(__dirname+'/public'));

app.use((req, res, next)=>{
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err)=>{
		if(err){
			console.log('Cannot write to server.log');
		}
	});
	next();
});

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle:'Home Page',
		greeting:"Welcome to my website"
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle:'About Page'
	});
});

app.listen(3000, ()=>{
	console.log('Server: Port 3000');
});