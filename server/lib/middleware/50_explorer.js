module.exports = function(loopback, app){
    var explorer = require('loopback-explorer');
    app.use('/explorer', explorer(app));
}