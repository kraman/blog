var loopback = require('loopback');
var app = loopback();

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