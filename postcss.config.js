/**
 * postcss.config.js
 * @author wangbo
 * @since 2019-04-10
 */

module.exports = {
    plugins: [require('autoprefixer')({ overrideBrowserslist: ['Chrome > 35', 'Firefox > 30', 'Safari > 7'] })]
};
