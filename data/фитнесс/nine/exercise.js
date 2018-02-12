//============================================================================================
// EXERCISE SCHEMA
//============================================================================================

// Load mongoose middleware
var mongoose = require('mongoose');

// Define the model
module.exports = mongoose.model('Exercise', {
	name: String,
	weight: Number,
	sets: Number,
	reps: Number,
	weekday: String
});