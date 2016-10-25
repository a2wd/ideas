var assert = require("assert")
var ideasApi = require("../server/api.idea.js")
var Idea = require("../server/models/Idea")

var writeConcern = {w:1}
var title = "test title [" + Date.now() + "]"
var test_idea = new Idea(title, "test description", ["test comment"])

describe("ideas db-api", function(){
	it("should have a non-negative number of entries", function(done){
		//Arrange
		//Not needed

		//Act
		var idea_count = ideasApi.count(function(count){

			//Assert
			assert(count > -1)
			done()
		})
	})

	it("should be able to insert an idea object", function(){
		//Arrange
		var expected_count = ideasApi.count() + 1

		//Act
		var status = ideasApi.create(test_idea)
		var idea_count = ideasApi.count()

		//Assert
		assert.ok(status)
		assert.equal(idea_count, expected_count)
	})

	it("should be able to list all ideas entries", function(){
		//Arrange
		var expected_count = ideasApi.count()

		//Act
		var ideas_objects = ideasApi.readAll()

		//Assert
		assert.equal(ideas_objects.length, expected_count)
	})

	it("should be able to list an idea entry by title", function(){
		//Arrange
		var search_object = {title: title}

		//Act
		var idea_object = ideasApi.read(search_object)

		//Assert
		assert.ok(idea_object)
		assert.deepEqual(idea_object, test_idea)
	})

	it("should be able to update an entry", function(){
		//Arrange
		var search_object = {title: title}

		var updated_object = new Idea(title, "An updated description", ["test comment"])
		var update = {description: "An updated description"}

		//Act
		var api_response = ideaApi.update(search_object, update)

		//Assert
		assert.ok(api_response)
		assert.deepEqual(api_response, updated_object)
	})

	it("should be able to delete an idea entry", function(){
		//Arrange
		var search_object = {title: title}

		//Act
		var status = ideaApi.delete(search_object)
		var deleted_object = ideaApi.read(search_object)

		//Assert
		assert.ok(status)
		assert(deleted_object === null)
	})

})