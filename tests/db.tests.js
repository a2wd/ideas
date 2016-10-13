var assert = require("assert")
var db = require("../server/db")
var Idea = require("../server/models/Idea")

describe("database", function(){

	describe("basic crud", function(){
		before(function(done) {
			db.connect(done)
		})

		it("it should be able to open a connection to the db", function(){
			//Assert
			assert.notEqual(null, db.handle)
		})

		it("should be able to get a handle to the Ideas collection", function(){
			//Arrange
			var ideas = db.collection("ideas")

			//Assert
			assert.ok(ideas)
		})

		it("should be able to write a record", function(){
			var test_idea = new Idea()

			


		})

		after(function(){
			db.close
		})

	})

})