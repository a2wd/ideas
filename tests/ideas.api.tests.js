var assert = require("assert")
var ideasApi = require("../server/api.idea.js")
var Idea = require("../server/models/Idea")

var writeConcern = {w:1}
var title = "test title"
var test_idea = new Idea(title, "test description", ["test comment"])

describe("ideas db-api", function(){

	it("should be able to insert an idea object", function(done){
		//Arrange
		var test_idea = new Idea(title, "test description", ["test comment"])
		var expected_count = ideasApi.count() + 1

		//Act
		var status = ideasApi.create(test_idea);

		//Assert
		assert.ok(status)
		assert.equal(idea_count, expected_count)
	})

	it("should be able to list all ideas entries", function(){
		//Arrange
		var expected_count = ideasApi.count()

		//Act
		var ideas_objects = ideasApi.read()

		//Assert
		assert.equal(ideas_objects.length, expected_count)
	})

	it("should be able to update an entry", function(){

	})

	it("should be able to delete an idea entry", function(){
		
	})

})