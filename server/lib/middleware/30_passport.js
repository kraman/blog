module.exports = function(loopback, app) {
    var config = {};
    try {
        config = require('./providers.json');
        Object.keys(config).forEach(function(providerName) {
            config[providerName] = app.parameterize(config[providerName]);
        })
    } catch (err) {
        console.error('Please configure your passport strategy in `providers.json`.');
        console.error('Copy `providers.json.template` to `providers.json` and replace the clientID/clientSecret values with your own.');
        process.exit(1);
    }

    passportConfigurator = app.passportConfigurator;
    passportConfigurator.init();
    passportConfigurator.setupModels({
        userModel: app.models.User,
        userIdentityModel: app.models.UserIdentity,
        userCredentialModel: app.models.UserCredential
    });
    app.use(loopback.token({model: app.models.accessToken}));

    for (var s in config) {
        var c = config[s];
        c.session = c.session !== false;
        passportConfigurator.configureProvider(s, c);
    }

    var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

    app.get('/', function(req, res, next) {
        res.render('index', {
            user: req.user
        });
    });

    app.get('/auth/account', ensureLoggedIn('/login.html'), function(req, res, next) {
        res.render('loginProfiles', {
            user: req.user
        });
    });

    app.get('/auth/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    });

    app.enableAuth();
}
