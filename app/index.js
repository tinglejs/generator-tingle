'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    init: function() {
    },

    askFor: function() {
        var done = this.async();

        var prompts = [{
            name: 'name',
            message: 'Input Tingle Component Name (must start width `tingle-`)',
            default: path.basename(process.cwd())
        },{
            name: 'description',
            message: 'Description',
            default: 'The best module ever.'
        }, {
            name: 'keywords',
            message: 'Key your keywords (comma to split)'
        }, {
            name: 'license',
            message: 'License',
            default: 'MIT'
        }, {
            name: 'authorName',
            message: 'Author\'s Name',
            store: true
        }];

        this.prompt(prompts, function(answers) {
            this.name = answers.name;
            this.ComponentName = _.capitalize(_.camelCase(answers.name)).replace(/Tingle/, '');

            this.keywords = answers.keywords.split(',').map(function(el) {
                return el.trim();
            });

            this.props = answers;
            done();
        }.bind(this));
    },

    app: function() {
        this.config.save();
        this.copy('_gitignore', '.gitignore');
        this.template('README.md', 'README.md');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.template('_package.json', 'package.json');
        this.template('webpack.dev.js', 'webpack.dev.js');
    },

    demoFiles: function() {
        this.template('index.html', 'index.html');
        this.mkdir('demo');
        this.template('demo/index.js', 'demo/index.js');
        this.template('demo/ComponentNameDemo.js', 'demo/'+this.ComponentName+'Demo.js');
        this.template('demo/ComponentNameDemo.styl', 'demo/'+this.ComponentName+'Demo.styl');
    },

    componentFiles: function () {
        this.mkdir('src');
        this.template('src/index.js', 'src/index.js');
        this.template('src/ComponentName.js', 'src/'+this.ComponentName+'.js');
        this.template('src/ComponentName.styl', 'src/'+this.ComponentName+'.styl');
    },

    install: function() {
        // 有权限问题
        // this.npmInstall();
    }
});