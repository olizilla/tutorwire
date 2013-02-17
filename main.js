var express = require('express');
var consolidate = require('consolidate');
var statics = require('./statics');
var data = require('./data.mem');

var app = express();

app.configure(function() {
	app.engine('html', consolidate.handlebars);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/client_compiled');
	app.use(express.bodyParser());
});

statics.init(app);

app.get('/', indexPage);
app.post('/', subjectSearch);
app.get('/learn/:subject', subjectPage);
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
	console.log(req);
	findPage(req, res);
}

function subjectSearch(req, res){
	// what is the subject
	// console.log(req.body);
	var subject = req.body.subject;
	if(!subject){
		res.redirect('/');
	}
	res.redirect('/learn/' + subject.toLowerCase());
}

function subjectPage(req, res){
	var subject = req.params.subject;
	//TODO: handle nonsense here
	res.render('learn', {
		subject: subject,
		tutors: data.findTutorsBySubject(subject)
	});
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

var port = process.env.PORT || process.argv[2] || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
