var assert = require("assert")
var Idea = require("../server/models/Idea")

describe("models", function(){

	describe("Idea", function(){

		it("should make a valid Idea model", function(){
			//Arrange
			var test_idea = new Idea();
			var props = ["title", "description", "comments", "timestamp"]

			//Act
			props.reduce((prev, curr) => prev && test_idea.hasOwnProperty(curr), true)

			//Assert
			assert.ok(props)
		})

		it("should correctly assign values in the constructor", function(){
			//Arrange
			var title = "myIdea"
			var description = "an idea for unit testing"
			var comments = []

			//Act
			var test_idea = new Idea(title, description, comments)

			//Assert
			assert.ok(test_idea)
			assert.equal(test_idea.title, title)
			assert.equal(test_idea.description, description)
			assert.deepEqual(test_idea.comments, comments)
		})

		it("should make unique Idea models with correct timestamps", function(done) {
			//Arrange
			var test_idea_1 = new Idea()
			var test_idea_2 = null

			//Act
			setTimeout(function(){
				test_idea_2 = new Idea()

				//Assert
				assert.ok(test_idea_1)
				assert.ok(test_idea_2)

				assert.notEqual(test_idea_1, test_idea_2)

				assert(test_idea_1.hasOwnProperty("timestamp"))
				assert(test_idea_2.hasOwnProperty("timestamp"))

				assert(test_idea_1.timestamp < test_idea_2.timestamp)

				done()

			}, 20)

		})

	})

})