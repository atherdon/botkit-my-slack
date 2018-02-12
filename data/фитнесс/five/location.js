var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var LocationSchema = new Schema({
	userId : Number,
	name : String,
	details : String,
	
});

//create method for display location + " - " + date string

// Create the 'Location' model out of the 'LocationSchema'
mongoose.model('Location', LocationSchema);