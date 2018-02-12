var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CardioSchema = new Schema({
	name : String,
	duration : Number,
	distance : Number,
	workout_id : Number,
	created_time: Date,
	workout: Number,//Delete maytbe?
	user_id: Number
});

// Create the 'Cardio' model out of the 'CardioSchema'
mongoose.model('Cardio', CardioSchema);