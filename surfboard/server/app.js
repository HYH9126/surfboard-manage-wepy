const config = require('./config')

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxy({});
 var http = require('http')
 http.createServer(function(req, res) {
     proxy.web(req, res, { target: "http://139.129.227.215/"});
 }).listen(config.port);