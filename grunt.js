module.exports = function(grunt) {
	
	grunt.initConfig({
		
		// Copy files that don't need compilation to client_compiled/
		copy: {
			dist: {
				files: {
					// Copy all (non hidden) files (not directories) from src
					'client_compiled/': 'client/*',
					
					// Copy the following hidden files
					//'client_compiled/.htaccess': 'client/.htaccess',
					
					// Copy any JavaScript files (not CoffeeScript src)
					'client_compiled/js/': 'client/js/**/*.js',
					
					// For the time being, you'll have to uncomment parts of this when you add files to folders that
					// currently have nothing in them!
					// @see https://github.com/gruntjs/grunt-contrib-copy/issues/6
					
					// Copy any CSS files (not LESS src)
					//'client_compiled/css/': 'client/css/**/*.css',
					
					// Copy other resources
					'client_compiled/img/': 'client/img/**',

					'client_compiled/font/': 'client/font/**'
				}
			}
		},

		includereplace: {
			dist: {
				src: 'client/*.html',
				dest: 'client_compiled/'
			}
		},

		// Compile all CoffeScript into main.js
		coffee: {
			compile: {
				files: {
					'client_compiled/js/main.js': 'client/js/main.coffee'
				}
			}
		},
		
		// Compile the mobile first site stylesheet (and the no @media queries version for lt-ie8)
		less: {
			compile: {
				files: {
					'client_compiled/css/main.css': 'client/css/main.less'
				}
			}
		},
		
		// Minify the site script
		min: {
			compress: {
				src: 'client_compiled/js/main.js',
				dest: 'client_compiled/js/main.js'
			}
		},
		
		// Minify the site CSS
		mincss: {
			compress: {
				files: {
					'client_compiled/css/main.css': 'client_compiled/css/main.css',
					'client_compiled/css/ie.css': 'client_compiled/css/ie.css'
				}
			}
		},
		
		// Watch CoffeeScript, LESS & HTML files for changes, copy & compile but not minify for easy debug during dev
		watch: {
			project: {
				files: ['client/js/**/*.coffee', 'client/css/**/*.less', 'client/**/*.html'],
				tasks: 'copy includereplace less coffee'
			}
		}
	});
	
	// Load the grunt-conrtib plugin so we can compile and compress CoffeeScript and LESS files
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-include-replace');
	
	grunt.registerTask('default', 'copy includereplace coffee less min mincss');
};
