loopback = require('loopback');
fs = require("fs");
var path = require('path');

app = loopback();

//initialize app
fs
    .readdirSync(path.join(__dirname, './lib/init'))
    .filter(function(m) {
        return path.extname(m) === '.js';
    })
    .forEach(function(fileName) {
        require('./lib/init/' + fileName)(loopback, app);
    });

//load datasources
dsDef = require('./lib/datasources.json');
Object.keys(dsDef).forEach(function(dsName) {
    app.dataSource(dsName, app.parameterize(dsDef[dsName]));
})
loopback.autoAttach();

//load models
require('../common/loadModels.js')(loopback, app);
require('./lib/loadModels.js')(loopback, app);

//setup express middleware
app.use(loopback.bodyParser());
app.use(loopback.logger('dev'));

app.use(loopback.static(path.join(__dirname, '../web')));
fs
    .readdirSync(path.join(__dirname, './lib/middleware'))
    .filter(function(m) {
        return path.extname(m) === '.js';
    })
    .forEach(function(fileName) {
        require('./lib/middleware/' + fileName)(loopback, app);
    });

app.use(loopback.urlNotFound());
app.use(loopback.errorHandler());

//start application
app.listen(function() {
    host = app.get('host')
    var baseURL = 'http://' + (host === '0.0.0.0' ? 'localhost' : host) + ':' + app.get('port');
    console.error('LoopBack sample is now ready at ' + baseURL);
});
