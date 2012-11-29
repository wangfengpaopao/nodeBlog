var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Post = new Schema({
		author:{type: ObjectId},
		title: {type: String, unique: true},
		content: {type: String},
		category: {type: ObjectId},
		
		create_at: {type: Date, default: Date.now},
		update_at: {type: Date, default: Date.now},
		comment_count: {type: Number, default: 0},	
		read_count: {type: Number, default: 0},

		content_is_html: {type: Boolean, default: false},
	});

mongoose.model("post", Post);
