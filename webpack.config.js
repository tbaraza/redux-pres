const combineLoaders = require('webpack-combine-loaders');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app/index.js'),
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
            },
        },
        {
            test: /\.scss$/,
            loader: combineLoaders([
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                },
                {
                    loader: 'sass-loader',
                }
            ]),
        }],
    },
};
