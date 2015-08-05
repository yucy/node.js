
// 域名爬虫地址
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=aaasdfasfa.com

var http = require("http");

var url = require("url");

function start(){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname+" received .");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello world aaa");
		response.end();
		console.log("Request hanldered .");
	}

	http.createServer(onRequest).listen(8888);

	console.log("Server has started .");
}

// 导出函数，方便在index.js文件中对其调用
exports.start = start;