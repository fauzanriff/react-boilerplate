const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new webpack.EnvironmentPlugin({
          DEV_MODE: process.argv.includes('--dev'),
        }),
        new CleanWebpackPlugin(),
      );
      return webpackConfig;
    },
  },
  jest: {
    configure: {
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.js',
      ],
    },
  },
};
