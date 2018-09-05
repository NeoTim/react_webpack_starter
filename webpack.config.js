const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader", "tslint-loader"],
                exclude: "/node_modules/"
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [require("autoprefixer")()]
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(["dist"])
    ]
};
