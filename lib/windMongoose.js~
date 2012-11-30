/*
 *@des     this code come from cnodejs.org, edit by wangfeng
 *@date    2012/11/30
 */


var mongoose = require("mongoose"),
	Wind = require("wind"),
	Model = mongoose.Model,
	rowsMethodes = ["save", "remove"],
	dataSetMethodes = ["find", "remove", "findById", "findOne", "count", "distinct", "create", "update"],

	init = function(){
		addAsyncMethod(rowsMethodes, Model.prototype);
		exports.model = model;
	},
	addAsyncMethod = function(methodes, obj){
		var i = 0, len = methodes.length;
		for(; i < len; i++){
			if(typeof obj[methodes[i]] == "function"){
				obj[methodes[i] + "Async"] = Wind.Async.Binding.fromStandard(obj[methodes[i]]);
			}
		};
	},
	model = function(name, schema){
		var _model = null;
		mongoose.model(name, schema);
		_model = mongoose.model(name);
		addAsyncMethod(dataSetMethodes, _model);
	};

init();
