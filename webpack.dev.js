const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,  {
    mode: 'development',
    devServer: {
        //port: '3000',
        /*
        static: {
            directory: path.join(__dirname, 'public'),
        },
        */
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true, // これ重要
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api/**': {
                target: 'http://localhost:3001',
                secure: false,
                logLevel: 'debug',
            }
        }
    },

})
