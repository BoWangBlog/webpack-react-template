/**
 * webpack-dev.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const notifier = require('node-notifier');

const commonConfig = require('./webpack-common.config');
const serverConfig = require('./server-config');

const devConfig = {
    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    devServer: {
        port: serverConfig.serverPort, // 默认8080
        client: {
            logging: 'info',
            overlay: true // 当存在编译错误或警告时，在浏览器中显示全屏覆盖。默认情况下禁用。
        },
        compress: true, // 一切服务都启用gzip 压缩
        proxy: {
            [serverConfig.apiPrefix]: {
                target: `${serverConfig.apiUri}:${serverConfig.apiPort}`,
                secure: false,
                changeOrigin: true
            }
        }
    },

    plugins: [
        // 热加载
        new webpack.HotModuleReplacementPlugin(),

        new WebpackBundleAnalyzer({
            openAnalyzer: false,
            analyzerPort: 8899
        }),

        new HtmlWebpackPlugin({
            title: '我是开发环境项目title',
            template: './src/app/index.html',
            // 打包出来的文件名称
            filename: 'index.html',
            // 是否加上hash，默认false
            hash: false,
            // 最小化输出方式
            minify: {
                removeAttributeQuotes: false, // 是否删除属性的双引号
                collapseWhitespace: true // 是否折叠空白
            },
            antd: '^4.5.2'
        }),

        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:4000']
            },
            // 错误日提示
            onErrors: (severity, errors) => {
                const error = errors[0];
                notifier.notify({
                    title: 'webpack编译失败',
                    message: `${severity}: ${error.name}`,
                    subtitle: error.file || ''
                });
            }
        })
    ]
};

module.exports = merge(devConfig, commonConfig(true));
