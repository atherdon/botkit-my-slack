var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WeightSchema = new Schema({
	userId : Number,
	date : Date,
	weight : Number,
	reps_mins : Number,
	weight_resistance: Number,
	
	
});

//create method for display date + weight + 'lbs' string

// Create the 'Weight' model out of the 'WeightSchema'
mongoose.model('Weight', WeightSchema);