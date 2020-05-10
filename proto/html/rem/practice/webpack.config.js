var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: [
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!cssloader'
            },
            {
                test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
}