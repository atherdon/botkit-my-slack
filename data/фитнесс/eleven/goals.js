var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GoalsSchema = new Schema({

	measurements_id: String,
	months: {
		month1,
		month2,
		month3,
		month4,
		month5,
		month6
	},


	// Name and Age
	

	created_time: Date,
	updated_at: Date,

});

// Create the 'Goals' model out of the 'GoalsSchema'
mongoose.model('Goals', GoalsSchema);

// https://www.stlukes-stl.com/images/chart_peak_flow.gif
// https://online.johnnyfit.com/wp-content/uploads/2015/12/Body-Measurement-Tracking-Sheet.jpg