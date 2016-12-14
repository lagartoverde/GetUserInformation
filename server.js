var http=require("http");

var server=http.createServer(function(req,res){
	var ip=req.connection.remoteAddress;
	var lang=req.headers["accept-language"];
	var userAgent=req.headers["user-agent"];
	var os=userAgent.split("(")[1].split(")")[0];
	var responseObject={
		"Ip":ip,
		"Language":lang,
		"Operating System":os
	}
	res.end(JSON.stringify(responseObject));
});
server.listen(process.env.PORT ||8080);
console.log("Server Running");