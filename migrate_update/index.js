'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var spawn = require('cross-spawn');

module.exports = yeoman.generators.Base.extend({
    init: function() {
    },

    update: function() {
        this.ComponentName = _.capitalize(_.camelCase(path.basename(process.cwd())))
                .replace(/Tingle/, '').replace(/^Dd/, 'DD').replace(/^Nw/, 'NW');
        this.config.save();
        this.copy('_gitignore', '.gitignore');
        this.copy('_editorconfig', '.editorconfig');
        this.template('gulpfile.js', 'gulpfile.js');
        this.template('webpack.dev.js', 'webpack.dev.js');
    },

    install: function() {
       
    }
});
