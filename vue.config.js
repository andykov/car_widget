const webpack = require ('webpack')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/widgets/dist/'
    : '/',
  // configureWebpack: { 
  //   plugins: [ 
  //     new webpack.optimize.LimitChunkCountPlugin ({ 
  //       maxChunks: 1 
  //     }) 
  //   ] 
  // },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  }
}