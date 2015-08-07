
// 域名爬虫地址
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=aaasdfasfa.com

var http = require("http");

var url = require("url");
var querystring = require("querystring");

function start(route,handle){
	function onRequest(request,response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname+" received .");

		// version 1.0 
		// 由requestHandlers里面的方法返回content，然后返回到页面
		//response.writeHead(200,{"Content-Type":"text/plain"});
		//response.write(content);
		//response.end();
		//console.log("Request hanldered end.");

		// version 1.1 
		// 传入response到requestHandlers，直接在里面的方法里返回到页面
		// route(handle,pathname,response);

		// version 1.2
		// 监听从页面post过来的数据
		request.setEncoding("utf8");
		request.addListener("data",function(postDataChunk){
			// querystring.parse(postDataChunk).text 将编码转换为汉字
			postData += querystring.parse(postDataChunk).text;
			console.log("received POST data chunk ："+ postData );
		});

		request.addListener("end",function(){
			route(handle,pathname,response,postData);
		});

	}

	http.createServer(onRequest).listen(8888);

	console.log("Server has started .");
}

// 导出函数，方便在index.js文件中对其调用
exports.start = start;