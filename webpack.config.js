var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Kanban app'
        }),
    ]
};

if (TARGET === 'build') {
    module.exports = common;
}

if (TARGET === 'dev') {
    module.exports = common;
}
