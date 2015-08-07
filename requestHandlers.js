
var exec = require("child_process").exec;

function start(response,postData){
	console.log("request handler start was called . ");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	response.write(body);
	response.end();

	// 模拟测试阻塞
	// console.log("START -------- "+new Date());
	// exec("node block.js",function(){
	// 	response.writeHead(200,{"Content-Type":"text/plain"});
	// 	response.write("Thanks for waiting!\n");
	// 	response.end();
	// 	console.log("OK -------- "+new Date());
	// });
}

function upload(response,postData){
	console.log("request handler upload was called . ");
	response.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});
	response.write("你提交的文字："+ postData);
	response.end();
}

exports.start = start;
exports.upload = upload;