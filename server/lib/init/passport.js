module.exports = function (loopback, app) {
    PassportConfigurator = require('loopback-passport').PassportConfigurator;
    app.passportConfigurator = new PassportConfigurator(app);
}