const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => {
  // argv.modeにはwebpackを実行したmodeが格納されている
  const IS_DEVELOPMENT = argv.mode === "development";

  return {
    entry: {
      styles: "./webpack/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "page")
    },
    // プラグインの設定
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "assets/css/[name].css",
        chunkFilename: "assets/css/[id].css"
      })
    ],
    // ローダーの設定
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader?minimize",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    // developmentモードで有効になるdevtool: 'eval'を上書き
    // developmentモードでビルドした時だけソースマップを出力する
    devtool: IS_DEVELOPMENT ? "source-map" : "none",
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true
                }
              }
            }),
            new OptimizeCssAssetsPlugin({})
          ]
    }
  };
};
