const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api',
                pathRewrite: {
                    '^/api/articles/interesting': '',
                    '^/api/articles/new': '',
                }
            }
        }
    },
    module: {
        rules: [

            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            // options: {
                            //     minimize: true
                            // }
                        },
                        "sass-loader"
                    ]
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ExtractTextPlugin("style.css")
    ],
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },

}