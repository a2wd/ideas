var db = require("./db")
var Idea = require("./models/Idea.js")
var ideasCollection = "ideas"
var writeConcern = {w: 1}

var ideasApi = function() {

	//Count items in collection
	this.count = function(cb) {
		db.connect(function() {
			var ideasHandle = db.collection(ideasCollection)

			ideasHandle.count({}, function(err, res){
				if(err) throw Error("Failed to count the ideas")

				db.close()
				cb(res)
			})
		})
	}

	this.create = function(doc, cb) {
		db.connect(function() {
			var ideasHandle = db.collection(ideasCollection)

			ideasHandle.insert(doc, writeConcern, function(err, doc){
				db.close()

				if(err) {
					cb(false)
					return
				}

				//else
				cb(true)
			})
		})
	}

	this.update = function(doc, update, cb) {
		db.connect(function() {
			var ideasHandle = db.collection(ideasCollection)

			ideasHandle.update(doc, {$set: update}, {upsert: false}, function(err, count, status) {
				db.close()

				if(err || count !== 1) {
					cb(false)
					return
				}

				//else
				cb(true)
			})
		})
	}

	this.read = null

	this.readAll = null

	this.delete = null
}

module.exports = new ideasApi()