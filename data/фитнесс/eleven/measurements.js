var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MeasurementsSchema = new Schema({
	weight : String, //pounds
	neck   : String,//inches
	chest  : String, //inches
	bicep  : String, // (R) Bicep inches
	waist  : String, // inches
	hip    : String, //inches
	thigh  : String, //inches
	totalInches: String, 

	// duration : Number,
	// distance : Number,
	// workout_id : Number,
	created_time: Date,
	updated_at: Date,

});

// Create the 'Measurements' model out of the 'MeasurementsSchema'
mongoose.model('Measurements', MeasurementsSchema);
// https://www.stlukes-stl.com/images/chart_peak_flow.gif
https://online.johnnyfit.com/wp-content/uploads/2015/12/Body-Measurement-Tracking-Sheet.jpg