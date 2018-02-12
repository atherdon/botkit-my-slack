var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	exercise: {
		type: String,
		default: '',
		trim: true,
		required: 'Exercise cannot be blank'
	},
	exerciseSlug: {
		type: String,
		default: 'no-slug'
	},
	sets: {
		type: String,
		default: '',
		trim: true
	},
	reps: {
		type: String,
		default: '',
		trim: true
	},
	weight: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Create the 'Exercise' model out of the 'ExerciseSchema'
mongoose.model('Exercise', ExerciseSchema);