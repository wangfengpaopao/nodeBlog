/*
 * @author:       wangfeng
 * @date:         2012/11/28
 * @des           based on express
 */

var express = require("express"),
	app = express(),
	config = require("./config").config,
	maxAge = config.staticMaxAge,
	csrf = express.csrf,
	path = require("path"),
	url = require("url"),
	ndir = require("ndir"),
	host = url.parse(config.host),
	viewRootDir = pth.join(__dirname, "views"),
	staticDir = path.join(__dirname, "public"),
	userDataDir = pth.join(staticDir, "userData"),
	uploadDir = path.join(userDataDir, "images")l,
	routes = require("./routes"),

	init = function(){
		config.host = host.hostname || config.host;
		config.uploadDir = config.uploadDir || uploadDir;
		ndir.mkdir(config.uploadDir, function(err){
			if(err){
				throw err;
			}
		});

		app.configure(function(){
			app.set("view engine", "html");
			app.set("views", viewRootDir);
			app.register(".html", require("ejs"));
			app.use(express.bodyParser({
				uploadDir: config.uploadDir
			}));
			app.use(express.cookieParser);
			app.use(express.session({
				secret: config.sessionSecret
			}));
			app.use(
				require("./controllers/sign").authUser		
			);		
			
			app.use(csrf);
			app.use("/upload/", express.static(config.uploadDir, {maxAge: maxAge}));
		
			app.use("./user_data", express.static(userDataDir, {maxAge: maxAge}));
			if(process.env.NODE_ENV != "test"){
				//todo
			};
		});
		app.configure("development", function(){
			app.use(express.static(staticDir));
			app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
		});


		app.configure("production", function(){
			app.use(express.static(staticDir, {maxAge: maxAge}));
			app.use(express.errorHandler());
			app.set("view cahce", true)
		});
		app.helpers({
			config: config
		});
		
		app.dynamicHelpers({
			csrf: function(req, res){
				//todo get csrf	  
			}
		});

		if(process.env.NODE_ENV != "test"){
			app.listen(config.port);
			console.log("blog listening on port %d,mode %s", config.port, app.setting.env);
		}
	};

init();
module.exports = app;





