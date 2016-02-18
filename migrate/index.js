'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var spawn = require('cross-spawn');

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
            done();
        }.bind(this));
    },

    app: function() {
        this.config.save();
        this.copy('_gitignore', '.gitignore');
        this.template('README.md', 'README.md');
        this.template('gulpfile.js', 'gulpfile.js');
        this.template('webpack.dev.js', 'webpack.dev.js');
        this.template('_package.json', 'package.json');
        this.copy('_editorconfig', '.editorconfig');
    },

    demoFiles: function() {
        this.mkdir('demo/src/svg');
        this.copy('demo/src/svg/tingle-logo-v.color.svg', 'demo/src/svg/tingle-logo-v.color.svg');
        this.template('index.html', 'index.html');
        this.template('demo/src/index.js', 'demo/src/index.js');
        this.template('demo/src/ComponentNameDemo.js', 'demo/src/'+this.ComponentName+'Demo.js');
        this.template('demo/src/ComponentNameDemo.styl', 'demo/src/'+this.ComponentName+'Demo.styl');
    },

    componentFiles: function () {
        this.mkdir('src/svg/ios');
        this.mkdir('src/svg/nw');
        this.template('src/index.js', 'src/index.js');
        this.template('src/ComponentName.js', 'src/'+this.ComponentName+'.js');
        this.template('src/ComponentName.styl', 'src/'+this.ComponentName+'.styl');
    },

    install: function() {
        var me = this;
        if (me.props.skipInstall) {
            return;
        }
        var done = me.async();
        var args = [
            'install',
            '-d'
        ];
        var opts = {
            stdio: 'inherit'
        };
        spawn('tnpm', args, opts).on('error', function() {
            spawn('npm', args, opts).on('exit', done);
        }).on('exit', done);
    }
});
