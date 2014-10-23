module.exports = {
	validate: function (username, password, next) {
		var db = req.server.plugins["hapi-mongodb"].db;
		db.collection("users")
		.find({user:username})
		.toArray(function(err, item){
			if(err||item.length < 1) {
				console.log("User not found");

			}
		}
		var user = users
	}
}