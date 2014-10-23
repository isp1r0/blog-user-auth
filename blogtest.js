var Lab = require("lab");
var lab = exports.lab = Lab.script();


//var thefile = require("../testfile.js");
var server = require("./server.js");

var describe = lab.experiment;
var it = lab.test;
var beforeEach = lab.beforeEach;
var expect = Lab.expect;


describe("Test the server", function() {

	it("get / should return string 'DEFAULT'", function(done){
	
		var options = {
	        method: "GET",
	        url: "/"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
//	 		console.log(response);
			Lab.expect(result).to.equal("DEFAULT");        
//			Lab.expect(response.statusCode).to.equal(200);
//	        Lab.expect(result).to.be.instanceof(Array);
//	        Lab.expect(result).to.have.length(5);
	 
	        done();
		});

	});

	it("get /home should return string 'HOME'", function(done){
	
		var options = {
	        method: "GET",
	        url: "/home"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
			Lab.expect(result).to.equal("HOME"); 
			Lab.expect(result).to.be.a("string");
	        done();
		});

	});

	it("get /tweet should return object with image property", function(done){
	
		var options = {
	        method: "GET",
	        url: "/tweet"
	    };
 
	    server.inject(options, function(response) {
	        var result = response.result;
	        Lab.expect(result).to.an.instanceof(Object);
			Lab.expect(result).to.have.property("image"); 
	        done();
		});

	});
});