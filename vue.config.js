const { name } = require('./package');
const { base } = require('./config');

module.exports = {
  publicPath: base,
  devServer: {
    port: 3400,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
