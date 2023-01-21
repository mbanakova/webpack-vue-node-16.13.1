const path = require('path');
const { config } = require('process');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  //base path
  publicPath: './',  //The default '/' is an absolute path, if you are not sure about the root path, change it to a relative path './'
  // output file directory
  outputDir: 'dist',
  assetsDir: 'assets',
  chainWebpack: (config) => {
    //Configure aliases
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/img/svg'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/img/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  },
};