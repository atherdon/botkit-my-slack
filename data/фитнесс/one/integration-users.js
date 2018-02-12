// link between activities feed and registered users

'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * IntegrationUsers Schema
 */

// #{user_service_id}
// #{service_name}
// #{user_id}


// #{created_at}
// #{updated_at}

var IntegrationUsersSchema = mongoose.Schema({

    user_service_id : Number,
    service_name  : String,
	user_id: Number

    created_at: Date,
    updated_at: Date,


});


IntegrationUsersSchema.methods.settify = function( data ){



	this.user_service_id     = data.user_service_id;
	this.service_name = data.service_name;

	this.user_id          = data.user_id;





	console.log( this );

	return this;
};


var IntegrationUsers = mongoose.model('IntegrationUsers', IntegrationUsersSchema);

module.exports = IntegrationUsers;
