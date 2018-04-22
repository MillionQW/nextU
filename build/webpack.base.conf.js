var path = require('path')
var glob = require('glob')

var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

// var entries = getEntry('./src/pages/**/*.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry:entries,
  entry: {
    center: './src/pages/center/center_main.js',
    live: './src/pages/live/live_main.js',
    video: './src/pages/video/video_main.js',
    nextulogin: './src/pages/nextulogin/nextulogin_main.js',
    lessonXQ: './src/pages/lessonXQ/lessonXQ_main.js',
    search: './src/pages/search/search_main.js',
    about: './src/pages/about/about_main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  }
}


//获取入口js文件
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    pathname = basename.split("_")[0];  //index_main.js得到index
    entries[pathname] = entry;
    
  });
  console.log('entry文件', entries)
  return entries;
}