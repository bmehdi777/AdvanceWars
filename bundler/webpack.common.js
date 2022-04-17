const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const miniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "../src/main.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.[contenthash].js",
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, "../static") }],
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            minify: true,
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|gif)$/i,
            pngquant: {
                verbose: true,
                quality: "80-90",
            },
        }),
        new miniCSSExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ["html-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [miniCSSExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
        ],
    },
};
