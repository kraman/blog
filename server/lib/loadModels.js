module.exports = function(loopback, app){
    var fs = require("fs");
    var path = require("path");
    
    fs
        .readdirSync(path.join(__dirname, './models'))
        .filter(function(m) {
            return path.extname(m) === '.js';
        })
        .forEach(function(fileName) {
            require('./models/' + fileName)(loopback, app);
        });
}