let path = require('path');

let conf = {
    //context: `${__dirname}/src/`,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: `${__dirname}/dist/`,
        filename: 'main.js',
        publicPath: 'test'
    }
};
 
module.exports = conf;