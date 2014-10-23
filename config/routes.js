var publicHandlers = require("../handlers/publichandlers.js");
var userHandlers = require("../handlers/userhandlers.js")
//var postModel = require("../models/post.js");

module.exports = [
	// PUBLIC HANDLERS **************
	{
		method: "GET",
		path: "/home",
		handler: publicHandlers.getHome
	},
	{
		method: "GET",
		path: "/post/{name}",
		handler: publicHandlers.getPost
	},
	{
		method: "GET",
		path: "/login",
		handler: publicHandlers.getLogin
	},
	// SIGN UP HANDLERS
	{
		method: "GET",
		path: "/signup",
		handler: publicHandlers.getSignUp
	},
	{
		method: "POST",
		path: "/signup",
		handler: publicHandlers.signUp
	},
	// USER HANDLERS ***************
	{
		method: "GET",
		path: "/addNew",
		config: {
			auth: "session"
		},
		handler: userHandlers.getAddForm
	},
	{
		method: "POST",
		path: "/addNew",
		config: {
			auth: "session",
//			validate: postModel
		},
		handler: userHandlers.postAddForm
	},
	{
		method: "GET",
		path: "/post/{name}/delete",
		config: {
			auth: "session"
		},
		handler: userHandlers.deletePost
	},
	{
		method: "POST",
		path: "/deleteAccount",
		config: {
			auth: "session"
		},
		handler: userHandlers.deleteAccount
	},
	//AUTHENTICATION HANDLERS
	{
		method: "POST",
		path: "/login",
		handler: publicHandlers.login
	},
	{
		method: "GET",
		path: "/logout",
		handler: userHandlers.logout
	},
	// OPTIONS HANDLERS ****************
	{
		method: "GET",
		path: "/public/{path*}",
		handler: publicHandlers.staticFiles
	},
	{
		method: "*",
		path: "/{path*}",
		handler: publicHandlers.notFound
	}
];