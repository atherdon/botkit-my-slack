var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TargetWeightSchema = new Schema({
	userId : Number,
	date : Date,
	weight : Number,

	weight_resistance: Number,
	
	
});

//create method for display date + weight + 'lbs' string

// Create the 'TargetWeight' model out of the 'TargetWeight'
mongoose.model('TargetWeight', TargetWeight);