module.exports = function(loopback, app){
  app.use(app.get('restApiRoot'), loopback.rest());
}