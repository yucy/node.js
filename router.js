

function route(handle,pathname,response,postData){
	console.log("about to route a request for "+pathname);
	if (typeof handle[pathname] == 'function') {
		return handle[pathname](response,postData);
	}else{
		console.log("no request handler found for "+pathname);
		response.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
		response.write("404 error");
		response.end();
	}

}

exports.route = route;