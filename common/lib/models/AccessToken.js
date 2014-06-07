module.exports = function(loopback, app){
  model  = loopback.AccessToken;
  config = require('./AccessToken.json');
  app.model(model, config);
  app.model(model);

  /*
    You can add custom methods to the model below. Eg:

    model.beforeSave = function(next, m) {
      if (!m.id) model.id = 't-' + Math.floor(Math.random() * 10000).toString();
      next();
    };
  */
}