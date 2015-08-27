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
            default: false
        }];

        this.prompt(prompts, function(answers) {
            this.name = answers.name;
            this.ComponentName = _.capitalize(_.camelCase(answers.name))
                .replace(/Tingle/, '').replace(/^Dd/, 'DD').replace(/^Nw/, 'NW');

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
        this.template('_bower.json', 'bower.json');
    },

    demoFiles: function() {
        this.template('index.html', 'index.html');
        this.template('demo/index.js', 'demo/index.js');
        this.template('demo/ComponentNameDemo.js', 'demo/'+this.ComponentName+'Demo.js');
        this.template('demo/ComponentNameDemo.styl', 'demo/'+this.ComponentName+'Demo.styl');
    },

    componentFiles: function () {
        this.mkdir('src/svg/tingle');
        this.mkdir('src/svg/custom');
        this.template('src/index.js', 'src/index.js');
        this.template('src/ComponentName.js', 'src/'+this.ComponentName+'.js');
        this.template('src/ComponentName.styl', 'src/'+this.ComponentName+'.styl');
    },

    install: function() {
        if (this.props.skipInstall) {
            return;
        }
        this.spawnCommand('tnpm', [
            'install',
            '-d'
        ]).on('close', this.async());
    }
});