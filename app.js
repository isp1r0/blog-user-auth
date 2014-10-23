var Hapi = require("hapi");
var server = new Hapi.Server("localhost", 8000);
var routes = require("./config/routes.js");
var viewOptions = require("./config/views.js");
var cookieOptions = require("./config/cookie.js");

module.exports = server;

server.pack.register({
	plugin: require("hapi-mongodb"),
	options: {
		"url": require("./keys/mongouri"),
		settings: {
			db: {
				native_parser: false
			}
		}
	}
}, function(err){console.log(err)});

server.pack.register(require("hapi-auth-cookie"), function(err){
	server.auth.strategy("session", "cookie", cookieOptions);
});

server.route(routes);

server.views(viewOptions);

if(!module.parent){
	server.start(function(){
		console.log("IM UP");
	});
}