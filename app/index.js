'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var TimewarpGenerator = yeoman.generators.Base.extend({

	init: function () {
		this.pkg = require('../package.json');

		this.on('end', function () {
			// if (!this.options['skip-install']) {
			// 	this.installDependencies();
			// }

			this.installDependencies({
				npm: true
			},function(){
				console.log("All dependencies installed.");

			});
			
		});
	},

	askFor: function () {
		var done = this.async();
		this.log(yosay('** Timewarp generator **'));
		done();

    /*
    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];



    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
	*/
	},

	app: function () {

	  	// creating folder structure

	  	this.mkdir('imgs');
	  	this.mkdir('js');
	  	this.mkdir('scss');
	  	this.mkdir('css');

	    // creating files (sass)

	    this.copy('_index.html','index.html');
	    this.copy('scss/_core.scss','scss/_core.scss');
	    this.copy('scss/_layout.481up.scss','scss/_layout.481up.scss');
	    this.copy('scss/_layout.768up.scss','scss/_layout.768up.scss');
	    this.copy('scss/_layout.1030up.scss','scss/_layout.1030up.scss');
	    this.copy('scss/_layout.1240up.scss','scss/_layout.1240up.scss');
	    this.copy('scss/_layout.common.scss','scss/_layout.common.scss');
	    this.copy('scss/_layout.retina.scss','scss/_layout.retina.scss');
	    this.copy('scss/_normalize.scss','scss/_normalize.scss');
	    this.copy('scss/_reset.scss','scss/_reset.scss');
	    this.copy('scss/timewarp.scss','scss/timewarp.scss');

	    // creating files (js)

	    this.copy('js/app.controller.js','js/app.controller.js');
	    this.copy('js/app.main.js','js/app.main.js');
	    this.copy('js/lib.analytics.js','js/lib.analytics.js');
	    this.copy('js/lib.angular.js','js/lib.angular.js');
	    this.copy('js/lib.jquery.js','js/lib.jquery.js');
	    this.copy('js/plugin.boilerplate.js','js/plugin.boilerplate.js');
	    this.copy('js/plugin.whatever.js','js/plugin.whatever.js');


	    // config files
	    this.copy('_gruntfile.js', 'Gruntfile.js');
	    this.copy('_package.json', 'package.json');
	    this.copy('_bower.json', 'bower.json');
	},

	projectfiles: function () {
		this.copy('editorconfig', '.editorconfig');
		this.copy('jshintrc', '.jshintrc');
	}
});

module.exports = TimewarpGenerator;
