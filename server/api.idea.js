var db = require("./db")
var ideasCollection = "ideas"

var ideasApi = function() {

	//Count items in collection
	this.count = function(cb){
		db.connect(function(){
			var ideasHandle = db.collection(ideasCollection)

			ideasHandle.count({}, function(err, res){
				if(err) throw Error("Failed to count the ideas")

				cb(res)
			})
		})
	}
}

module.exports = new ideasApi()