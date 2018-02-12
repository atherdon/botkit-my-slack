var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ChartSchema = new Schema({
	user_id : String,
	chart_type : String, //Lift or Cardio
	activity_type : String,
	weight : Number,
	duration: Number,
	created_time: Number,//Delete maytbe?
	show: Bool,
	
});

// Create the 'Chart' model out of the 'ChartSchema'
mongoose.model('Chart', ChartSchema);