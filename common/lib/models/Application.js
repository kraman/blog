module.exports = function(loopback, app){
  model  = loopback.Application;
  config = require('./Application.json');
  app.model(model, config);

  /*
    You can add custom methods to the model below. Eg:

    model.beforeSave = function(next, m) {
      if (!m.id) model.id = 't-' + Math.floor(Math.random() * 10000).toString();
      next();
    };
  */
}