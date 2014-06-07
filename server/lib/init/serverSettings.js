module.exports = function (loopback, app) {
  settings = require("./settings.json");
  Object.keys(settings).forEach(function (key) {
    app.set(key, settings[key]);
  });
}