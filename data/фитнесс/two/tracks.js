'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Tracks Schema
 */


// #{starting_point_id}
// #{name}
// #{night_track}
// #{map_link}
// #{km}
// #{comments}

// #{created_at}
// #{updated_at}

var Tracks = mongoose.Schema({

    starting_point_id : Number,
    name: String,
    night_track: Number,
    map_link: String,
    km: Number,
    comments: String,

    created_at: Date,
    updated_at: Date,


});


TracksSchema.methods.settify = function( data ){


	this.starting_point_id     = data.starting_point_id;
	this.name     = data.name;
	this.night_track     = data.night_track;
	this.map_link     = data.map_link;
	this.km     = data.km;
	this.comments     = data.comments;






	console.log( this );

	return this;
};



var Tracks = mongoose.model('Tracks', TracksSchema);

module.exports = Tracks;
