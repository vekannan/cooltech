const path = require('path');

module.exports = {    
    entry: ['./src/js/index.js','./src/sass/main.scss'], 
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/proposal-class-properties']
            }
        }]
    },
}