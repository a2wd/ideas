module.exports = function(title, description, comments, timestamp) {
	return {
		title: title || "",
		description: description || "",
		comments: comments || [],
		timestamp: timestamp || Date.now()
	}
}