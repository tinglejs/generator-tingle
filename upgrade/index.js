'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

    upgrade: function() {
        var me = this;

        // gulpfile 和 gitignore 更新
        me.bulkCopy('_gitignore', '.gitignore');
        me.bulkCopy('gulpfile.js', 'gulpfile.js');

        // 依赖更新
        var pkg = JSON.parse(me.readFileAsString('package.json'));
        pkg.devDependencies = {
            'babel-core': '^5.8.19',
            'babel-loader': '^5.3.2',
            'gulp': '^3.9.0',
            'tingle-dev-tools': 'latest'
        };
        me.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');

        // 样式文件名更新
        var html = me.readFileAsString('index.html');
        if (html.indexOf('./demo/demo.css') === -1) {
            me.appendToFile('index.html', 'head', '<link rel="stylesheet" href="./demo/demo.css">');
        }

        // 增加 svg 文件目录
        me.mkdir('src/svg/tingle');
        me.mkdir('src/svg/custom');

        // 没有版权声明的增加版权声明
        var componentName = _.capitalize(_.camelCase(pkg.name))
            .replace(/Tingle/, '').replace(/^Dd/, 'DD').replace(/^Nw/, 'NW');
        var authorName = pkg.author.name;
        me.expandFiles('src/*.js').forEach(function(file) {
            var content = me.readFileAsString(file);
            if (content.indexOf('/**') && content.indexOf('/*!')) {
                content = [
                    '/**',
                    ' * ' + componentName + ' Component for tingle',
                    ' * @auther ' + authorName,
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
                    ' * @auther ' + authorName,
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
        me.spawnCommand('tnpm', [
            'install',
            '-d'
        ]).on('close', me.async());
    }
});