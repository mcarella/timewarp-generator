module.exports = function(grunt) {

	grunt.initConfig({

		/* =============================================
   			DEFINING PATHS AND FOLDERS
   		================================================ */

		pkg: grunt.file.readJSON('package.json'),
	    js_src_path: 'js',
	    js_build_path: "js",
	    css_src_path: "css",
	    css_build_path: "css",
	    scss_src_path: "scss",

	    /* =============================================
   			TASKS SETUP
   		================================================ */


	   	/* -------------------------------------------------
   			CONCAT JS & CSS
   		---------------------------------------------------- */
 
	    concat: {
	    	options:{
	    		separator: ';'
	    	},

	    	js: {
	    		src: [
	    		'<%= js_src_path %>/lib.analytics.js',
	    		'<%= js_src_path %>/lib.jquery.js',
	    		'<%= js_src_path %>/lib.angular.js',
	    		'<%= js_src_path %>/plugin.whatever.js',
	    		'<%= js_src_path %>/app.controller.js',
	    		'<%= js_src_path %>/app.main.js'
	    		],
	    		dest: '<%= js_build_path %>/timewarp.js'
	    	},

	    	css:{
	    		src: ['<%= css_src_path %>/*.css'],
	    		dest: '<%= css_build_path %>/timewarp.css'   
	    	}

	    },

	    /* -------------------------------------------------
   			UGLIFY & OBFUSCATION
   		---------------------------------------------------- */

	    uglify: {
	    	options:{
	    		mangle: true,
	    		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version + "\\n" %>' +
	    		'* <%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
	    		'* <%= pkg.homepage + "\\n" %>' + 
	    		'* Copyright (c) <%= grunt.template.today("yyyy") %> - <%= pkg.title %> */ <%= "\\n" %>'
	    	},

	    	js: {
	    		src: '<%= concat.js.dest %>',
	    		dest:'<%= js_build_path %>/timewarp.min.js'
	    	}

	    },


	    /* -------------------------------------------------
   			COMPASS COMPILE
   		---------------------------------------------------- */

   		compass: {
   			dist: {
   				options: {
   					sassDir: 'scss',
   					cssDir: 'css',
   					environment: 'development',
   					outputStyle: 'compressed'
   				}
   			}
   		},

   		/* -------------------------------------------------
   			COMPASS WATCH
   		---------------------------------------------------- */

   		watch: {
   			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
   		},


	    /* -------------------------------------------------
   			CSS MINIFY
   		---------------------------------------------------- */

	    cssmin: {
	    	css: {
	    		src: '<%= concat.css.dest %>',
	    		dest:'<%= css_build_path %>/timewarp.min.css'
	    	}
	    }


});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'watch', 'cssmin']);
};