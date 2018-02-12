'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Activity Schema
 */

// #{_id}
// #{service_activity_id}
// #{date}
// #{distance}
// #{user_id}

// #{created_at}
// #{updated_at}

var ActivitySchema = mongoose.Schema({

    service_activity_id : Number,
    date  : Date, // or dateTime publish??
    distance: Number,//@todo or number of reps or laps or something else
    user_id: Number,

    created_at: Date,
    updated_at: Date,


});


ActivitySchema.methods.settify = function( data ){



	this.service_activity_id     = data.service_activity_id;
	this.date = data.date;
	this.distance         = data.distance;
	this.user_id          = data.user_id;





	console.log( this );

	return this;
};


var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
