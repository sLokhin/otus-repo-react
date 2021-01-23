const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.tsx")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React exercises",
            template: path.resolve(__dirname, "./src/template.html"), //шаблон
            filename: "index.html", //название выходного файла
        })
    ]
}
