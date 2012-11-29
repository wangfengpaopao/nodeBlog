var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Comment = new Schema({
		author: {type: ObjectId},
		post: {type: ObjectId},
		comment: {type: ObjectId},
		content: {type: String}
	});

mongoose.model("Comment", Comment);
