result.js

routes -->


// this is can be an easy version of loggin stuff

	var result = {
			date: req.body.date,
			morningWeight: req.body.morningWeight,
			nightWeight: req.body.nightWeight,
			sugar: req.body.sugar,
			lateEating: req.body.lateEating,
			morningFitness: req.body.morningFitness,
			nightFitness: req.body.nightFitness,
			walking: req.body.walking,
			notes: req.body.notes,
			userId: decoded._id
		};


var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
	
	/************** Schema ********************/
	var ResultSchema = new Schema({
		date: {type: Date, required: true},
		morningWeight: {type: Number},
		nightWeight: {type: Number},
		sugar: {type: Boolean},
		lateEating: {type: Boolean},
		morningFitness: {type: Boolean},
		nightFitness: {type: Boolean},
		walking: {type: Boolean},
		notes: {type: String},
		userId: {type: ObjectId}
	});

	var Result = mongoose.model('Result', ResultSchema);
	

	module.exports = (function () {
	return {
		getDaysInMonth: function (month, year) {
			return new Date(year, month, 0).getDate();
		},
		getMonthDays: function (jsMonth) {
			// important: this should be javascript zero based month number via Date.prototype.getMonth()
			return this.getDaysInMonth(new Date().getFullYear(), jsMonth + 1);
		}
	};
})();

$scope.result.morningWeight = 0;
			$scope.result.nightWeight = 0;
			$scope.result.sugar = false;
			$scope.result.lateEating = false;
			$scope.result.morningFitness = false;
			$scope.result.nightFitness = false;
			$scope.result.walking = false;
			$scope.result.notes = '';