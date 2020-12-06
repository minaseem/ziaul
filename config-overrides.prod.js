const R = require('ramda');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function (config) {
    config.devtool = false;
    // config.output.path =  path.resolve(__dirname, 'docs');
    config.plugins.push(new reactLoadablePlugin({
        filename: 'build/react-loadable.json',
    }));
    /*config.module.rules.unshift({
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    });
    // remove restriction that source files can't be outside src folder
    config.resolve.plugins = config.resolve.plugins.filter(function (p) {
        return R.not(p instanceof ModuleScopePlugin);
    });*/
}
