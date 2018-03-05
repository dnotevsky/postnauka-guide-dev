const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app.bundle': path.resolve(__dirname, "./src/app.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    publicPath: path.build
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
      },
      {
       test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
       use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8007,
    proxy: {
      '/api/*': {
        target: 'https://postnauka.ru/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        },
        logLevel: 'debug'
      }
    }
  },
  plugins: [
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/index.html"),
      template: path.resolve(__dirname, "./src/pages/page.pug"),
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/images'),
      to: 'images'
    }]),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/fonts'),
      to: 'fonts'
    }]),
    // components here
    // for footer
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/footer/component.html"),
      template: path.resolve(__dirname, "./src/components/footer/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/footer/footer.styl'),
      to: path.resolve(__dirname, "./dist/components/footer/style.styl")
    }]),

    // for header
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/header/component.html"),
      template: path.resolve(__dirname, "./src/components/header/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/header/header.styl'),
      to: path.resolve(__dirname, "./dist/components/header/style.styl")
    }]),

    // for cover
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/cover/component.html"),
      template: path.resolve(__dirname, "./src/components/cover/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/cover/cover.styl'),
      to: path.resolve(__dirname, "./dist/components/cover/style.styl")
    }]),

    // for course_description
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/course_description/component.html"),
      template: path.resolve(__dirname, "./src/components/course_description/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/course_description/course_description.styl'),
      to: path.resolve(__dirname, "./dist/components/course_description/style.styl")
    }]),

    // for subscribe
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/subscribe/component.html"),
      template: path.resolve(__dirname, "./src/components/subscribe/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/subscribe/subscribe.styl'),
      to: path.resolve(__dirname, "./dist/components/subscribe/style.styl")
    }]),

    // for quote
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote/component.html"),
      template: path.resolve(__dirname, "./src/components/quote/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote/quote.styl'),
      to: path.resolve(__dirname, "./dist/components/quote/style.styl")
    }]),

    // for reference
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/reference/component.html"),
      template: path.resolve(__dirname, "./src/components/reference/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/reference/reference.styl'),
      to: path.resolve(__dirname, "./dist/components/reference/style.styl")
    }]),

    // for menu
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/menu/component.html"),
      template: path.resolve(__dirname, "./src/components/menu/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/menu/menu.styl'),
      to: path.resolve(__dirname, "./dist/components/menu/style.styl")
    }]),

    // for preview_faq
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_faq/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_faq/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_faq/preview_faq.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_faq/style.styl")
    }]),

    // for preview_text
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_text/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_text/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_text/preview_text.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_text/style.styl")
    }]),

    // for preview_lecture
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_lecture/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_lecture/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_lecture/preview_lecture.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_lecture/style.styl")
    }]),

    // for preview_tezaurus
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_tezaurus/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_tezaurus/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_tezaurus/preview_tezaurus.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_tezaurus/style.styl")
    }]),

    // for preview_test
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_test/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_test/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_test/preview_test.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_test/style.styl")
    }]),

    // for preview_timeline
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_timeline/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_timeline/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_timeline/preview_timeline.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_timeline/style.styl")
    }]),

    // for preview_list
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_list/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_list/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_list/preview_list.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_list/style.styl")
    }]),

    // for preview_interview
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/preview_interview/component.html"),
      template: path.resolve(__dirname, "./src/components/preview_interview/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/preview_interview/preview_interview.styl'),
      to: path.resolve(__dirname, "./dist/components/preview_interview/style.styl")
    }])
  ]
};
