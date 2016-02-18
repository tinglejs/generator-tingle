/**
 * <%= ComponentName %> Component for tingle
 * @author fushan
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
var fs = require('fs');
var webpack = require('webpack');

// 扫描tingle目录下的所有module
//function getTingleModuleAlias() {
//    var alias = {};
//
//    // 判断是否存在tingle目录
//    if (!fs.existsSync(__dirname + '/tingle')) return alias;
//
//    var modules = fs.readdirSync(__dirname + '/tingle');
//    modules.forEach(function (name) {
//        alias[name] = [__dirname, 'tingle', name, 'src'].join('/');
//    });
//    return alias;
//}

module.exports = {
    cache: false,
    entry: {
        demo: __dirname + '/demo/src/index'
    },
    output: {
        path: __dirname + '/demo/dist',
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devtool: '#source-map', // 这个配置要和output.sourceMapFilename一起使用
    module: {
        loaders: [
            {
                test: /\.js$/,
                // tingle以外的modules都不需要经过babel解析
                exclude: function (path) {
                    var isNpmModule = !!path.match(/node_modules/);
                    var isTingleModule = !!path.match(/node_modules[\/\\]tingle/);
                    return isNpmModule && !isTingleModule;
                },
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        //alias: getTingleModuleAlias()
    },
    externals: {
        'react': 'var React', // 相当于把全局的React作为模块的返回 module.exports = React;
        'react-dom': 'var ReactDOM'
    },
    plugins: [
        new webpack.DefinePlugin({
          __LOCAL__: true, // 本地环境
          __DEV__:   true, // 日常环境
          __PRO__:   false // 生产环境
        })
    ]
};
