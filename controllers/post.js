var models = require("../models/index"),
	Post = models.Post,
	getPostById = function(postId, cb){
		Post.findOn({"_id": postId}, function(err, data){
			if(err){
				console.log("get post by id: %s failed", postId);
			}
			cb && cb(data);
		});	
	
	},
	getPostByQuery = function(query, options, cb){
		
	
	}


