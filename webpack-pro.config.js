/**
 * webpack-pro.config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack-common.config');

const smp = new SpeedMeasurePlugin();
const cdnVersion = require('./cdn-version.json');

const mainConfig = {
    mode: 'production',
    // 控制是否生成，以及如何生成 source map，配置项很多，cheap-module-eval-source-map表示原始源代码（仅限行）
    devtool: 'source-map',

    externals: [
        {
            moment: 'moment',
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router': 'ReactRouter',
            'react-router-dom': 'ReactRouterDOM',
            mobx: 'mobx',
            'mobx-react': 'mobxReact',
            axios: 'axios',
            antd: 'antd',
            nprogress: 'NProgress'
        }
    ],

    // 代码优化配置
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    minChunks: 1,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                },
                default: {
                    name: 'common_libs',
                    minChunks: 1,
                    priority: -20, // 优先级配置项
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            // 压缩js
            new TerserWebpackPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),
            new CssMinimizerPlugin()
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '我是线上环境项目title',
            template: './src/app/indexCDN.html',
            // 打包出来的文件名称
            filename: 'index.html',
            // 是否加上hash，默认false
            hash: false,
            // 最小化输出方式
            minify: {
                removeAttributeQuotes: false, // 是否删除属性的双引号
                collapseWhitespace: true // 是否折叠空白
            },
            cdnVersion
        })
    ]
};

// smp.wrap loader所用打包时间
module.exports = smp.wrap(merge(mainConfig, commonConfig(true)));
