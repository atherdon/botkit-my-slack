'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Users Schema
 */

// #{email}
// #{encrypted_password}
// #{reset_password_token}
// #{reset_password_sent_at}
// #{remember_created_at}
// #{sign_in_count}
// #{current_sign_in_at}
// #{last_sign_in_at}
// #{current_sign_in_ip}
// #{last_sign_in_ip}


// #{created_at}
// #{updated_at}

var UsersSchema = mongoose.Schema({

    email                  : String,
    encrypted_password     : String,
    reset_password_token   : String,
    reset_password_sent_at : Date,
    remember_created_at    : Date,
    sign_in_count          : Number,
    current_sign_in_at     : Date,
    last_sign_in_at        : Date,
    current_sign_in_ip     : String,
    last_sign_in_ip        : String,

    created_at: Date,
    updated_at: Date,


});


UsersSchema.methods.settify = function( data ){



	this.email     = data.email;
	this.encrypted_password = data.encrypted_password;
	this.reset_password_token         = data.reset_password_token;
	this.reset_password_sent_at          = data.reset_password_sent_at;
	this.remember_created_at     = data.remember_created_at;
	this.sign_in_count = data.sign_in_count;
	this.current_sign_in_at         = data.current_sign_in_at;
	this.last_sign_in_at          = data.last_sign_in_at;
	this.last_sign_in_at     = data.last_sign_in_at;
	this.current_sign_in_ip = data.current_sign_in_ip;
	this.last_sign_in_ip         = data.last_sign_in_ip;






	console.log( this );

	return this;
};



var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
