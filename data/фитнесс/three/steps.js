'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Steps Schema
 */

// #{date}
// #{steps}

// #{created_at}
// #{updated_at}

var Steps = mongoose.Schema({

	date: Date,
	steps: Number,

    created_at: Date,
    updated_at: Date,


});


StepsSchema.methods.settify = function( data ){



	this.date     = data.date;
	this.steps    = data.steps;




	console.log( this );

	return this;
};



var Steps = mongoose.model('Steps', StepsSchema);

module.exports = Steps;
