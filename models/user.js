var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	User = new Schema({
		name: {type: String, index: true},
		loginname: {type: String, unique: true},
		email: {type: String, unique: true},
		password: {type: String},

		weibo: {type:String},
		profile: {type: String},
		create_at: {type: Date, default: Date.now},
		update_at: {type: Date, default: Date.now},	
	});

mongoose.model("User", User);
