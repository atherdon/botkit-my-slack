var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	name : String,
	description_short : String,
	description_long : String,
	exercise_type_id : Number,
});

// Create the 'Exercise' model out of the 'ExerciseSchema'
mongoose.model('Exercise', ExerciseSchema);