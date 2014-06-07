module.exports = function(loopback, app){
    app.use(loopback.session({
        secret: app.get('sessionSecret')
    }));
}