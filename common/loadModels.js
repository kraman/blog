module.exports = function(loopback, app){
  //Built-in models
  require('./lib/models/AccessToken.js')(loopback, app);
  require('./lib/models/Acl.js')(loopback, app);
  require('./lib/models/Application.js')(loopback, app);
  require('./lib/models/Email.js')(loopback, app);
  require('./lib/models/Role.js')(loopback, app);
  require('./lib/models/RoleMapping.js')(loopback, app);
  require('./lib/models/Scope.js')(loopback, app);
  require('./lib/models/User.js')(loopback, app);

  //Extended-Built-in models

  //User-defined models
}