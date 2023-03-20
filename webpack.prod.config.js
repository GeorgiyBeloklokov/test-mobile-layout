const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    performance: {
      hints: false
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                issuer: /\.css$/,
                type: 'asset/resource',
                use: [
                    {
                    loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                use: [
                    {
                    loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(mp.3|mp.4|wav|)$/,
                type: 'asset/inline',
                use: [
                    {
                    loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: './',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            url: false
                        }
                    },
                    'postcss-loader', 'sass-loader'],
            },
        ],

    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Test-mob1',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                },                
            ]
        }),
        new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                  // Svgo configuration here https://github.com/svg/svgo#configuration
                  [
                    "svgo",
                    {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
    ]
}