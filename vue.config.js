const env = process.env.VUE_APP_ENV
const isProd = env === 'prod'
console.log(`------ 正在运行 ${env} 环境 ------`)

module.exports = {
  publicPath: isProd ? '' : '/',
  outputDir: 'dist',
  assetsDir: './static',
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 全局引入sass 新 sass-loader prependData 旧版 data
        prependData: `
          @import "@/styles/_variable.scss";
        `
      }
    }
  }
}