var mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	Category = new Schema({
		name: {type: String, unique: true},
		profile: {type: String},

		create_at: {type: Date, default: Date.now},
		update_at: {type: Date, default: Date.now},	

		post_count: {type: Number, default: 0}
	});

mongoose.model("Category", Category);
