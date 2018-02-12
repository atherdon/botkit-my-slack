'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * ActivityName Schema
 */

// #{name}

// #{created_at}
// #{updated_at}

var ActivityName = mongoose.Schema({

    name : String,


    created_at: Date,
    updated_at: Date,


});


ActivityNameSchema.methods.settify = function( data ){



	this.name     = data.name;




	console.log( this );

	return this;
};



var ActivityName = mongoose.model('ActivityName', ActivityNameSchema);

module.exports = ActivityName;
