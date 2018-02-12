'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Runs Schema
 */


// #{date}
// #{participants}
// #{km}
// #{duration}
// #{max_pulse}
// #{comments}
// #{map_link}
// #{user_id}
// #{created_at}
// #{updated_at}

var Runs = mongoose.Schema({

    date : Date,
    participants: String,
    km: Number,
    duration: Number,
    max_pulse: Number,
    comments: String,
    map_link: String,
    user_id: Number,



    created_at: Date,
    updated_at: Date,


});


RunsSchema.methods.settify = function( data ){


	this.date     = data.date;
	this.participants     = data.participants;
	this.km     = data.km;
	this.duration     = data.duration;
	this.max_pulse     = data.max_pulse;
	this.comments     = data.comments;
	this.map_link     = data.map_link;
	this.user_id     = data.user_id;





	console.log( this );

	return this;
};



var Runs = mongoose.model('Runs', RegionsSchema);

module.exports = Runs;
