//Wenn Sie eine globale Variable möchten, können Sie Folgendes tun:
//global.logger = new logger(customConfig); das ist nodeJS

let path = require('path');

let conf = {
    //context: `${__dirname}/src/`,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: `${__dirname}/dist/`,
        filename: 'main.js'
        //publicPath: 'test/'
    },
    /*,
    devServer: {
        overlay: true
    }*/
    devtool: 'source-map'
};
 
module.exports = conf;
