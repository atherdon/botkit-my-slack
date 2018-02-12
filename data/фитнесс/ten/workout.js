var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
		
	user_id: Number,
	created_time: Date,	
	completed_time: Date
});

// Create the 'Workout' model out of the 'WorkoutSchema'
mongoose.model('Workout', WorkoutSchema);