var path = require("path");
module.exports = {
    mode: "development",
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".json" ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 100
    }
}

