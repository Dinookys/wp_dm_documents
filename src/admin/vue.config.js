module.exports = {
    filenameHashing: false,
    productionSourceMap: false,
    chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: '[name].[ext]' }));
  },
  css: {
    extract: {
      filename: '../../assets/admin/[name].css',
      chunkFilename: '../../assets/admin/[name].css',
    },
  },
  configureWebpack: {
    output: {
      filename: '../../assets/admin/[name].js',
      chunkFilename: '../../assets/admin/[name].js',
    }
  },
  publicPath: '../../assets/'
};