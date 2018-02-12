var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ExerciseTypeSchema = new Schema({
	
	name: String, // not more 30 chars
	
});

// Create the 'ExerciseType' model out of the 'ExerciseTypeSchema'
mongoose.model('ExerciseType', ExerciseTypeSchema);