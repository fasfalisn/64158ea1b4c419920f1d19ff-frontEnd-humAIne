const path = require('path');

module.exports = {
  entry: {
	'Homepage' : './javascript/Homepage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};