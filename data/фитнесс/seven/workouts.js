//attach and set up mongoose schema
var mongoose= require('mongoose');
var schema= mongoose.Schema;

// create workouts schema
var Workouts = new schema({
	title: String,
	hours: Number,
	date: String,
	user: String
});
//make public
 module.exports= mongoose.model('Workouts', Workouts);