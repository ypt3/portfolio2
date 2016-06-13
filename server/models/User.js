var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//leaving here for future blog creation

var UserSchema = new mongoose.Schema({
	name: String
});

var User = mongoose.model('User', UserSchema);
