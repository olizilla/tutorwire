var express = require('express');

module.exports.init = function(app) {
	
	app.use('/js', express['static'](__dirname + '/client_compiled/js'));
	app.use('/css', express['static'](__dirname + '/client_compiled/css'));
	app.use('/img', express['static'](__dirname + '/client_compiled/img'));
	app.use('/font', express['static'](__dirname + '/client_compiled/font'));
	
	app.use(express.favicon(__dirname + '/client_compiled/favicon.ico'));
	
	var appleTouchIcons = [
		'/apple-touch-icon-57x57-precomposed.png',
		'/apple-touch-icon-72x72-precomposed.png',
		'/apple-touch-icon-114x114-precomposed.png',
		'/apple-touch-icon-144x144-precomposed.png',
		'/apple-touch-icon-precomposed.png',
		'/apple-touch-icon.png'
	];
	
	appleTouchIcons.forEach(function(filename) {
		app.get(filename, function(req, res) {
			res.sendfile(__dirname + '/client_compiled' + req.url, {maxAge: 86400000});
		});
	});
};