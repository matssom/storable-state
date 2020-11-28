const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    entry: './example/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'example')
    }
}