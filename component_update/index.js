'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var spawn = require('cross-spawn');

module.exports = yeoman.generators.Base.extend({
  // 对 yeoman 不太熟悉，先写一个函数来解决
  update: function() {
    var prompts = [{
      name: 'name',
      message: 'Input Tingle Component Name (must start width `tingle-`)',
      default: path.basename(process.cwd())
    },{
      name: 'description',
      message: 'Description',
      default: path.basename(process.cwd()) + ' component for tingle.'
    }, {
      name: 'keywords',
      message: 'Key your keywords (comma to split)'
    }, {
      name: 'authorName',
      message: 'Author\'s Name',
      store: true
    }, {
      type: 'confirm',
      name: 'skipInstall',
      message: 'Skip install the dependencies?',
      default: true
    }];

    this.prompt(prompts, function(answers) {
      this.name = answers.name;
      this.ComponentName = _.capitalize(_.camelCase(answers.name))
      .replace(/Tingle/, '').replace(/^Dd/, 'DD').replace(/^Nw/, 'NW');

      this.keywords = answers.keywords.split(',').map(function(el) {
        return el.trim();
      });

      this.props = answers;
      this.config.save();

      this.copy('_gitignore', '.gitignore');
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_eslintrc.json', '.eslintrc.json');
      this.template('gulpfile.js', 'gulpfile.js');
      this.template('gulpfile.js', 'gulpfile.js');
      this.template('webpack.dev.js', 'webpack.dev.js');
      this.template('_package.json', 'package.json');
      this.template('index.html', 'index.html');
    }.bind(this));
  }
});
