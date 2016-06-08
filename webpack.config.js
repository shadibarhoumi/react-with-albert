module.exports = {
  context: __dirname + '/src',
  entry: {
    examples: ['./examples'],
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    sourceMapFilename: '[name].bundle.js.map',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
    ],
  },
  devtool: 'source-map',
};
