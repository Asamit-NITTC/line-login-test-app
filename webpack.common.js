const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require('path');
const env = dotenv.config().parsed;

module.exports = {
    entry: path.resolve(__dirname, './src/client/index.js'), //エントリポイント
    output: {
        path: path.resolve(__dirname,  './dist'),
        //path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/', // assetに対するベースURL
    },
    // target: 'web',
   resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'client', 'public', 'index.html'),
            filename: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        })
    ],
};
