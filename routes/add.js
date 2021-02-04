var data = require("../data.json");

exports.addFriend = function(request, response) { 
	response.render('index', data);
	// Your code goes here
	var newFriend = { "name" : request.query.name, "description":  request.query.description, "imageURL": "http://lorempixel.com/400/400/people" };
	data.friends.push(newFriend);
	// console.log(newFriend);
 };