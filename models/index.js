var mongoose = require("mongoose"),
	config = require("../config.js").config;


mongoose.connect(config.db, function(err){
	if(err){
		console.error("connect to %s error: %s", config.db, err.message);
		process.exit(1);
	}
});

require("./user");
require("./category");
require("./comment");
require("./post");

exports.Category = mongoose.model("Category");
exports.User = mongoose.model("User");
exports.Comment = mongoose.model("Commont");
exports.Post = mongoose.model("Post");



