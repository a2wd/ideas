var http = require("http")

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"})
	res.end("Hello, world\n")
})

var listenFunction = function() {
	server.listen.apply(server, arguments)
}

var closeFunction = function(callback) {
	server.close(callback)
}

module.exports = {
	listen: listenFunction,
	close: closeFunction
}