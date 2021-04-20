const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Horse Mappy',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "**/style.css",
                    context: 'src/style',
                    to: path.resolve(__dirname, 'dist') + '/style/style.css' },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*.(jpg|jpeg|svg|png)",
                    context: 'src/images',
                    to: path.resolve(__dirname, 'dist') + '/images/' },
            ],
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};