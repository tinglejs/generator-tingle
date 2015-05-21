var webpack = require('webpack');
module.exports = {
    cache: false,
    entry: {
        demo: './demo/index'
    },
    output: {
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devtool: '#source-map', // 这个配置要和output.sourceMapFilename一起使用
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        alias: {
            'tingle-foo-bar': __dirname + '/tingle/tingle-foo-bar/src' // 自定义别名
        }
    },
    externals: {
        react: 'var React' // 相当于把全局的React作为模块的返回 module.exports = React;
    }
};