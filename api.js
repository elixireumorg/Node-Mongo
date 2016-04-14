var express = require("express"),
	mongoose = require("mongoose");
	
var db = mongoose.connect('mongodb://localhost/bookApi');

var Book = require('./model/bookModel');

var app = express();
var port = 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function(req, res){
		Book.find(function(err,books){
			if(err)
				console.log(err);
			else
				res.json(books);	
		});
	});

app.use('/app', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});
