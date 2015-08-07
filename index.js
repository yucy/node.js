
// 域名爬虫地址
// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=aaasdfasfa.com

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// 调用server.js中的服务启动方法
server.start(router.route,handle);
