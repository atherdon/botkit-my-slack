var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var LiftSchema = new Schema({
	name : String,
	weight : Number,
	sets : Number,
	reps : Number,
	created_time: Date,
	workout: Number,//Delete maytbe?
	user_id: Number,
	completed_time: Date
});

// Create the 'Lift' model out of the 'LiftSchema'
mongoose.model('Lift', LiftSchema);