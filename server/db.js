var MongoClient = require("mongodb").MongoClient

function db() {
	var url = "mongodb://localhost:27017/ideas"
	var db = null;

	var connectToIdeas = function(callback) {
		MongoClient.connect(url, function(err, dbConnection){
			if(err !== null) {
				throw Error("Failure to connect to the db on " + url + "\n" + err)
			}

			db = dbConnection

			callback()
		})
	}

	var closeConnection = function() {
		if(typeof db === "object" && typeof db.close === "function") {
			db.close()
		}
	}

	var getDbObject = function() {
		return db;
	}

	var getCollection = function(collection) {
		if(db === null) {
			throw Error("Attempt to retrieve a collection handle without opening a DB connection")
		}

		if(typeof collection !== "string" || collection.length === 0) {
			throw Error("A call to collection was missing a collection name")
		}

		return getDbObject().collection(collection)
	}

	return {
		connect: connectToIdeas,
		close: closeConnection,
		handle: getDbObject,
		collection: getCollection
	}
}

module.exports = new db();