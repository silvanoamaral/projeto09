const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    root: path.resolve(__dirname, 'dist'),
    template: './src/index.html',
    favicon: './src/favicon.ico',
};