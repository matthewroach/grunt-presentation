module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['grunt.js', 'a/src/js/*.js'],
			options: {
				browser: true,
				laxcomma: true
			}
		},

		concat : {
			js : {
				src : ['a/src/js/**/*.js', 'a/src/js/src/*.js'],
				dest : 'a/js/presentation.js'
			},
			css : {
				src : ['a/src/css/*.css'],
				dest : 'a/css/presentation.css'
			}
		},

		uglify: {
    	options: {
      	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
   		build: {
      	src: 'a/js/<%= pkg.name %>.js',
      	dest: 'a/js/<%= pkg.name %>.min.js'
      }
    },

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('watchme', 'watch');

};
