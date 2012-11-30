var 
	mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	model = require("../../lib/windMongoose.js").model,
	User = model("User", new Schema({name: {type: String}})),
	user = null,
	assert = require("assert");

User = mongoose.model("User");
user = new User();

describe("windMongoose", function(){
	it("typeof model and user.saveAsync should be function", function(){
		assert.equal("function", typeof model);
		assert.ok(user.saveAsync);
	});	

	it("mongoose.Model.prototype.removeAsync and User.findOneAsync should be exist", function(){
		assert.equal("function", typeof  mongoose.Model.prototype.removeAsync);
		assert.ok(User.findOneAsync);
	});

});
	




