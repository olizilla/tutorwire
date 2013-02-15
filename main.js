var express = require('express');
var consolidate = require('consolidate');
var statics = require('./statics');
var data = require('./data.mem');

var app = express();

app.configure(function() {
	app.engine('html', consolidate.handlebars);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/client_compiled');
});

statics.init(app);

app.get('/', indexPage);
app.post('/', subjectSearch);
app.get('/subject/:subject', subjectPage);
app.get('/join', joinPage);
app.get('/find', findPage);

/**
 * Do a home page
 */
function indexPage(req, res) {
	res.render('index', {
		popularSubjects: JSON.stringify(data.findPopularSubjects())
	});
}

function subjectSearch(req, res){
	console.log(req)
	findPage(req, res)
}

function subjectSearch(req, res){
	subjectPage(req, res)
}

function subjectPage(req, res){
	var subject = req.params.subject

}

/**
 * Do a home page
 */
function joinPage(req, res) {
	res.render('join');
}

function findPage(req, res) {
	res.render('find');
}

if(!process.argv[2]) {
	console.log('No port specified');
	return;
}

app.listen(process.argv[2]);

console.log('Listening on port', process.argv[2]);
