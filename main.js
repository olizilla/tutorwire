var express = require('express');
var consolidate = require('consolidate');
var geocoder = require('geocoder');
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
app.post('/join', joinHandler);
 app.get('/find', findPage);
 app.get('/geocode/:place', geocode);
 app.get('/data/uk/:place', geocodeUk);
 app.get('/data/uk', ukCities);

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
		tutors: data.findTutorsBySubject(subject),
		popularAreas: JSON.stringify(data.findPopularAreas()),
		popularSubjects: JSON.stringify(data.findPopularSubjects())
	});
}

/**
 * Do a home page
 */
function joinPage(req, res) {
	res.render('join', {
		popularSubjects: JSON.stringify(data.findPopularSubjects())
	});
}

function joinHandler(req, res){
	var email = req.params.email;
}

function findPage(req, res) {
	res.render('find');
}

function geocode(req, res){
	var place = req.params.place + ', UK';
	geocoder.geocode(place, function(err, data){
		res.json(data);
	});
}

function geocodeUk(req, res){
	var place = req.params.place;
	var placeData = data.findUkGeocode(place);
	res.json(placeData);
}

function ukCities(req, res){
	var cities = data.findPopularAreas();
	result = {};
	for(var i = 0; i < cities.length; i++){
		
		var geodata = data.findUkGeocode(cities[i]);

		result[cities[i]] = {
			lat: geodata.lat,
			lng: geodata.lng
		};
	}
	res.json(result);
}

var port = process.env.PORT || process.argv[2] || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// repl = require("repl");
// repl.start({
//   prompt: "node via stdin> ",
//   input: process.stdin,
//   output: process.stdout
// }).context.data = data;
