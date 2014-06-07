module.exports = function(loopback, app) {
    settings = require("./lib/settings.json");
    Object.keys(settings).forEach(function(key) {
        app.set(key, settings[key]);
    });

    app.parameterize = function(o) {
        t = Object.prototype.toString.call(o);
        //console.log(o, "(" + t + ")");
        
        if (t === '[object String]') {
            return o.replace(/[{]([a-zA-Z0-9_]*)[}]/g, function($1, $2) {
                if (app.get($2) === null) {
                    return $1;
                }
                return app.get($2);
            });
        } else if (t === '[object Array]') {
            for (i = 0; i < o.length; i++) {
                o[i] = app.parameterize(o[i]);
            }
        } else if (t === '[object Object]') {
            Object.keys(o).forEach(function(k) {
                o[k] = app.parameterize(o[k]);
            });
        }
        return o;
    }
};
