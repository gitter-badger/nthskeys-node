var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App.jsx',
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.ejs']
    },
    module: {
        loaders: [
            { test: /\.js(x)?$/, loader: 'react-hot!babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ }
        ]
    },
    externals: {
        jQuery: true,
        React: true,
        ReactDOM: true,
        ReactRouter: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'NthsKeys',
            template: 'index.development.ejs',
            hash: true
        })
    ]
}