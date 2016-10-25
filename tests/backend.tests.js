var assert = require("assert")
var http = require("http")
var server = require("../server/backend")

var port = 8080
var url = "http://localhost:" + port.toString()

describe("backend", function(){
	describe("server", function(){

		before(function(){
			server.listen(port)
		})

		describe("/ (server root path)", function() {

			it("should return a status code of 200", function(done){
				//Arrange
				//Not required

				//Act
				http.get(url, function(res){

					//Assert
					assert.equal(200, res.statusCode)
					done()
				})
			})

			it("should say hello world", function(done){
				//Arrange
				var data = ""
				var expected_response = "Hello, world\n"

				//Act
				http.get(url, function(res){
					res.on("data", function(chunk) {
						data += chunk
					})

					res.on("end", function(){
						//Assert
						assert.equal(data, expected_response)
						done()
					})
				})

			})

		})

		after(function(){
			server.close()
		})

	})

})