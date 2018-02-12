var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SetSchema = new Schema({
	userId : Number,
	sessionId : Number,
	exerciseId : Number,
	reps_mins : Number,
	weight_resistance: Number,
	
	
});

//create method for display session + exercise + weight_resistance + "X" + reps_mins string

// Create the 'Set' model out of the 'SetSchema'
mongoose.model('Set', SetSchema);