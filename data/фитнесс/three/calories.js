// https://github.com/m-rstewart/Fitness/blob/master/app.spec.js

'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Calories Schema
 */

// #{date}
// #{calories}

// #{created_at}
// #{updated_at}

var Calories = mongoose.Schema({

    date : String,
    calories: Number,

    created_at: Date,
    updated_at: Date,


});


CaloriesSchema.methods.settify = function( data ){



	this.name     = data.name;




	console.log( this );

	return this;
};


var Calories = mongoose.model('Calories', CaloriesSchema);

module.exports = Calories;
