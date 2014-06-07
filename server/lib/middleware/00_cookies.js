module.exports = function(loopback, app){
    app.use(loopback.cookieParser(app.get('cookieSecret')));
}