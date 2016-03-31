const path = require('path')
const webpack = require('webpack')
const jquery = require('jquery')

module.exports = {
    devtool: 'inline-source-map',
    resolve: ['jquery','bootstrap'],
    entry: ['jquery','./client.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/__build__/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: jquery
            /*,
             jQuery: "jquery",
             "window.jQuery": "jquery"*/
        })
    ],
    module: {
        loaders: [
            {
            test: /\.js$/,
            loader: ['babel'],
            exclude: /node_modules/,
            query: { plugins: [] }
        }]
    }
}