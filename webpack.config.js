var webpack = require("webpack");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './public_html/_/components/js/app.js',
    output: {
        path: './public_html/_/js',
        filename: 'bundle.js',
        publicPath: 'public_html'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: "./public_html",
        port: 3000
    },
    module: {
        loaders: [
            { 
                test: /\.vue$/, 
                loader: 'vue'
            },
            {   
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["latest", "stage-0", "react"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    ]
}