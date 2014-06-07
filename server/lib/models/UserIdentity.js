module.exports = function(loopback, app){
    modelName  = 'UserIdentity';
    config = require('./UserIdentity.json');
    app.model(modelName, config);
    model = app.models.UserIdentity;

    /*
      You can add custom methods to the model below. Eg:

      model.beforeSave = function(next, m) {
        if (!m.id) model.id = 't-' + Math.floor(Math.random() * 10000).toString();
        next();
      };
    */
}