var assert = require("assert")
var db = require("../server/db")
var Idea = require("../server/models/Idea")

var writeConcern = {w:1}
var title = "test title"
var test_idea = new Idea(title, "test description", ["test comment"])

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

		it("should be able to write a record", function(done){
			//Arrange
			var ideas_collection = db.collection("ideas")

			//Act
			ideas_collection.insert(test_idea, writeConcern, function(err, res){

				//Assert
				assert(err === null)
				assert.ok(res)
				assert.equal(res.result.n, 1)

				done()
			})
		})

		it("should be able to read a record", function(done){
			//Arrange
			var ideas_collection = db.collection("ideas")

			//Act
			ideas_collection.findOne({title: title}, function(err, item){
				//Assert
				assert(err === null)
				assert.ok(item)

				assert.equal(item.title, title)

				done()
			})
		})

		it("should be able to update a record", function(done){
			//Arrange
			var ideas_collection = db.collection("ideas")
			var update = {description: "updated field"}

			//Act
			ideas_collection.updateOne({title: title}, {$set: update}, function(err, res){
				//Assert
				assert(err === null)
				assert.ok(res)

				assert.equal(res.result.n, 1)

				done()
			})
		})

		it("should be able to delete a record", function(done) {
			//Arrange
			var ideas_collection = db.collection("ideas")

			//Act
			ideas_collection.deleteOne({title: title}, function(err, res){
				//Assert
				assert(err === null)
				assert.ok(res)

				assert.equal(res.result.n, 1)

				done()
			})
		
		})

		after(function(){
			db.close
		})

	})

})