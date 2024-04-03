const path = require("path");
const webpack = require("webpack");

require('dotenv').config({ path: './.env' });

module.exports = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "public/dist"),
      clean: true,
    },
    
    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
    })
    ],
    resolve: {
      fallback: {
        url: require.resolve("url/"),
        zlib: require.resolve("browserify-zlib"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer/"),
        vm: require.resolve("vm-browserify"),
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /(\.css$)/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: "[name].[ext]",
                outputPath: "img",
                esModule: false
              }
            },
          ],
        },
      ],
    },
  };
};
