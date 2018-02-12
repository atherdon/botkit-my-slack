var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GoalSchema = new Schema({
	user_id : String,
	type : String, //Lift or Cardio
	name : String,
	weight : Number,
	duration: Number,
	created_time: Number,//Delete maytbe?
	show: Bool,
	
});

// Create the 'Goal' model out of the 'GoalSchema'
mongoose.model('Goal', GoalSchema);