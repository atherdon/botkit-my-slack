var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	created: Date,
	exercise: String,
	exerciseSlug: String,
	sets: String,
	reps: String,
	weight: String,
	creator: Number // userID
});

// Create the 'Exercise' model out of the 'ExerciseSchema'
mongoose.model('Exercise', ExerciseSchema);