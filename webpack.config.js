// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.ts',
    output: {
        filename: "pixi.js", // 打包后输出文件的文件名
        path: path.resolve(__dirname, 'pixi'),
        library: 'MyLibrary',
        libraryTarget: 'umd',
        // globalObject: 'this' // 解决在 Node.js 环境中 `window` 不存在的问题
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
            // require: 'imports-loader?wrapper=window=>undefined!exports-loader?window.require!require'
        }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                // loader: 'ts-loader',
                exclude: ['/node_modules/'],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-typescript'],
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "buffer": require.resolve("buffer/"),
            "vm": require.resolve("vm-browserify"),
            "assert": require.resolve("assert/"),
            "fs": false,
            "path": require.resolve("path-browserify"),
            "http": require.resolve('stream-http'),
            "https": require.resolve('https-browserify'),
            "zlib": require.resolve('browserify-zlib'),
            "url": require.resolve('url/'),
            "os": require.resolve('os-browserify/browser'),
            "process/browser": require.resolve('process/browser'),
            "constants": require.resolve('constants-browserify'),
            "readline": require.resolve('readline')
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
