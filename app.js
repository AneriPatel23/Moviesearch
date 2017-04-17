var express=require("express");
var request=require("request");
var bodyparser=require("body-parser");
var app=express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/search",function(req,res){
	res.render("searchMovie");
});

app.post("/results",function(req,res){

	var movie=req.body.moviename;
	console.log(movie);
	request("http://omdbapi.com/?s="+movie,function(error,response,body){
		if( !error && response.statusCode==200){
			var resultdata=JSON.parse(body);
			res.render("results",{data:resultdata});
		}
	});
});
//testing nodemon
app.listen(3000,function(req,res){
console.log("server has started!");
});

