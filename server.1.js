var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  fs.readFile("./client/index.html","utf8",function(err,data){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(data,function(err){
      //console.log(err);
      //console.log(data);
      res.end();
    });
  });
});

server.listen(process.env.PORT,process.env.IP);
console.log("サーバーを起動しました");