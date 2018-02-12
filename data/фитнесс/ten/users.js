var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : String,
	email : String,
	pw_hash : String,
	authenticated : Bool,
	date_registered: Date
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);