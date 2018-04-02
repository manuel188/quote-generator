const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =  {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    module:{
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },       
            { test: /\.html$/, use: [{loader: "html-loader"}]},
            // { test:/\.css$/, use:['style-loader','css-loader'], include: path.resolve('src')}
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        
          ]
    }, 
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
          })
    ]
    
}

