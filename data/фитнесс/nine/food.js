//============================================================================================
// FOOD MODEL
//============================================================================================

// Load mongoose middleware
var mongoose = require('mongoose');

// Define food schema
module.exports = mongoose.model('Food',{
	name: String,
	calories: Number,
	protein: Number,
	fat: Number,
	carbs: Number
});