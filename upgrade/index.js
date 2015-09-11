'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var spawn = require('cross-spawn');

module.exports = yeoman.generators.Base.extend({

    upgrade: function() {
        var me = this;

        // 从 package.json 中取回脚手架初始化项目时指定的一些变量
        var pkg = JSON.parse(me.readFileAsString('package.json'));
        var authorName = pkg.author.name;
        var componentName = _.capitalize(_.camelCase(pkg.name))
            .replace(/Tingle/, '').replace(/^Dd/, 'DD').replace(/^Nw/, 'NW');

        // gulpfile 和 gitignore 更新
        me.bulkCopy('_gitignore', '.gitignore');
        me.bulkCopy('gulpfile.js', 'gulpfile.js');

        // 依赖更新
        pkg.dependencies = {
            'tingle-context': '~0.1.0',
            'tingle-style': '~0.0.1',
            'classnames': '^2.1.2'
        };
        pkg.devDependencies = {
            'babel-core': '^5.8.19',
            'babel-loader': '^5.3.2',
            'gulp': '^3.9.0',
            'tingle-dev-tools': 'latest',
            'react': '^0.13.3',
            'zepto': '0.0.4',
            'fastclick': '^1.0.6'
        };
        // todo 想下怎么升级想要的依赖
        // me.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');

        // DEMO 样式文件路径变更
        var html = me.readFileAsString('index.html');
        if (html.indexOf('./demo/' + componentName + 'Demo.css') !== -1) {
            html = html.replace('./demo/' + componentName + 'Demo.css', './dist/demo.css');
            me.writeFileFromString(html, 'index.html');
        }

        // 增加 svg 文件目录
        me.mkdir('src/svg/tingle');
        me.mkdir('src/svg/custom');

        // 没有版权声明的增加版权声明
        me.expandFiles('src/*.js').forEach(function(file) {
            var content = me.readFileAsString(file);
            if (content.indexOf('/**') && content.indexOf('/*!')) {
                content = [
                    '/**',
                    ' * ' + componentName + ' Component for tingle',
                    ' * @author ' + authorName,
                    ' *',
                    ' * Copyright 2014-2015, Tingle Team, Alinw.',
                    ' * All rights reserved.',
                    ' */',
                    ''
                ].join('\n') + content;
                me.writeFileFromString(content, file);
            }
        });
        me.expandFiles('src/*.styl').forEach(function(file) {
            var content = me.readFileAsString(file);
            if (content.indexOf('/**') && content.indexOf('/*!')) {
                content = [
                    '/**',
                    ' * ' + componentName + ' Component Style for tingle',
                    ' * @author ' + authorName,
                    ' *',
                    ' * Copyright 2014-2015, Tingle Team, Alinw.',
                    ' * All rights reserved.',
                    ' */',
                    ''
                ].join('\n') + content;
                me.writeFileFromString(content, file);
            }
        });
    },

    install: function() {
        var me = this;
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
