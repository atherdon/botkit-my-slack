
// I think this entity is equal to Workouts.
// propose to rename it for better understanding later

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SessionSchema = new Schema({
	userId : Number,
	locationId : Number,
	date : Date,
	description : String
	
});



// Create the 'Session' model out of the 'SessionSchema'
mongoose.model('Session', SessionSchema);