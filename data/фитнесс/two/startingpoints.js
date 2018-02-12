'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Starting Points Schema
 */


// #{region_id}
// #{name}
// #{map_link}
// #{created_at}
// #{updated_at}

var StartingPoints = mongoose.Schema({

    region_id : Number,
    name: String,
    map_link: String,

    created_at: Date,
    updated_at: Date,


});


StartingPointsSchema.methods.settify = function( data ){


	this.region_id     = data.region_id;
	this.name     = data.name;
	this.map_link     = data.map_link;






	console.log( this );

	return this;
};



var StartingPoints = mongoose.model('StartingPoints', StartingPointsSchema);

module.exports = StartingPoints;
