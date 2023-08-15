const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,  {
    mode: 'development',
    devServer: {
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
        port: 5002,
        proxy: {
            '/api/**': {
                target: 'http://localhost:5001',
                secure: false,
                logLevel: 'debug',
            }
        }
    },

})
