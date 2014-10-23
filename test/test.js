var Lab = require("lab");
var lab = exports.lab = Lab.script();

var server = require("../server.js");

var describe = lab.experiment;
var it = lab.test;
var beforeEach = lab.beforeEach;
var expect = Lab.expect;

describe("when connecting to server", function(){

	it("should return db items", function(done){

		var options = {
	        method: "GET",
	        url: "/home"
	    };

	    server.inject(options, function(response){
	    	var result = response.result;
	    	console.log(response);
	    	expect(result).be.an("object");
	    	//expect(result).to.have.property("firstName");
	    	done();
	    })

	});

});