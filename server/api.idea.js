var db = require("./db")
var ideasCollection = "ideas"

var ideasApi = function() {

	//Count items in collection
	this.count = function(countDone){
		db.connectToIdeas(function(){
			var ideasHandle = getCollection(ideasCollection)
		})
	}
}

module.exports = ideasApi