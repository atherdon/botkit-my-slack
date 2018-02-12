var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BaselineSchema = new Schema({

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

// Create the 'Baseline' model out of the 'BaselineSchema'
mongoose.model('Baseline', BaselineSchema);

// https://www.stlukes-stl.com/images/chart_peak_flow.gif
// https://online.johnnyfit.com/wp-content/uploads/2015/12/Body-Measurement-Tracking-Sheet.jpg
// http://thefitnessfocus.com/wp-content/uploads/2014/11/Measurement-Tracking-with-Body-Fat-Percentage.png
// https://s-media-cache-ak0.pinimg.com/736x/96/43/41/964341863153315d5cf2945461a59106.jpg
// https://s-media-cache-ak0.pinimg.com/736x/1f/48/40/1f48409f70e34c3b5f81321fcf39dbbd.jpg
// http://proceduretemplate.info/wp-content/uploads/2016/08/body-measurement-chart_7.png
// https://images-na.ssl-images-amazon.com/images/G/01/img12/APPAREL/APLUSDETAIL/DOCKERS/c26-B003XDTOFS-size-women.png
// http://www.setma.com/epm-tools/images/Weight_Mgt_011.jpg
// https://omextemplates.content.office.net/support/templates/en-us/mt01021965.png
// http://www.lifebymom.com/wp-content/uploads/2015/04/lifebymom-FP-A5-L-weightloss-progress_1-copy-600x776.jpg
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3Zha_JvR_9jX2wpsB4jEbrRMp8XWOEpycwxuLDpHm6qzjzeda
// http://www.lukepeerfly.com/wp-content/uploads/2011/05/weight-tracker.png