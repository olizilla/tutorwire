Tutor Wire [![Dependency Status](https://david-dm.org/olizilla/tutorwire.png)](https://david-dm.org/olizilla/tutorwire)
==========

Find Tutors, Fast.

Uses:

- NodeJS + express + handlebars to serve the things
- LESS to style the things
- Grunt to tidy and translate the things to JS & CSS
- [GRUNTEND](https://github.com/alanshaw/gruntend) as a handy foundation and leg up

Getting Started
---------------

Install [Node.js](http://nodejs.org/)

Install grunt:

	npm install -g grunt

Install plugins:

	cd /path/to/tutorwire
	npm install

Build the site:

	grunt

The built site can be found at ./client_compiled

Grunt can watch the project and compile LESS and coffeescript when you make changes to the files. Grunt is setup to _not_ minify files when watching them to aid debugging whilst in development.

	grunt watch

Project build settings are configured in the usual `grunt.js` file.
