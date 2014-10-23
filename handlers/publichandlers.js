var mongo = require("mongodb");
var bcrypt = require("bcrypt");

module.exports = {
	getHome: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("posts")
		.find()
		.toArray(function (err2, dbPosts) {		
			res.view("home.swig", {
				title: "The Chaps Blog",
				description: "Welcome to the Chaps blog",
				posts: dbPosts,
				auth: req.state.hasOwnProperty("loggedin")
			})
		});
	},
	getPost: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("posts")
		.find({
			firstName: req.params.name
		})
		.toArray(function (err2, dbPosts) {		
			res.view("post.swig", {
				title: "Posts",
				post: dbPosts[0]
			})
		});
	},
	getLogin: function (req, res) {
		res.view("login.swig");
	},
	notFound: function (req, res) {
		res.view("404.swig");
	},
	login: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("users")
		.find({username: req.payload.username})
		.toArray(function(err, match){
			if(err){
				//Change to correct error
				console.log(err)
				return res.view("404.swig");
			}
			var user = match[0];
			if(user){
				bcrypt.compare(req.payload.password, user.password, function(err, same){
					console.log("HELLO");
					if(same){req.auth.session.set({"username": user.username});	
						console.log("SAME");
						return res.redirect("/home");
					} else {
						console.log("NOTSAME");
						return res.view("404.swig");
					}
				});
			}else {
				// Change to correct error
				return res.view("404.swig");
			}
		})
	},
	getSignUp: function (req, res) {
		return res.view("signup.swig");
	},
	signUp: function (req, res) {
		if(req.payload.password === req.payload.passwordConfirm){
			var db = req.server.plugins["hapi-mongodb"].db;
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(req.payload.password, salt, function(err2, hash){
					var newUser = {
						username: req.payload.username,
						password: hash
					}
					db.collection("users")
					.insert(newUser, function(err, item){
						req.auth.session.set({"username": newUser.username});
						res.redirect("/home");
					});

				})
			})
		}
	},
	staticFiles: {
		directory: {
			path: "./public",
			listing: false,
			index: false
		}
	}
}