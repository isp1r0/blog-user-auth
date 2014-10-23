module.exports = {
	getAddForm: function (req, res) {
		res.view("addNew.swig", {
			author: req.state.loggedin.username
		});
	},
	postAddForm: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("posts").insert({
			firstName: req.payload.fname,
			lastName: req.payload.lname
		}, function(err, item) {res.redirect("/home")});

	},
	deletePost: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("posts").remove({
			firstName: req.params.name
		}, function(err, item) {
			res.redirect("/home");
		})
	},
	logout: function (req, res) {
		req.auth.session.clear();
		res.redirect("/home");
	},
	deleteAccount: function (req, res) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("users")
		.remove({username:req.state.loggedin.username}, function(err, item){
			req.auth.session.clear();
			res.redirect("/home");
		});
	}
}